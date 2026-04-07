import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { createClerkClient } from '@clerk/clerk-sdk-node';
import { AuthenticatedRequest } from '../types/auth.types';

@Injectable()
export class ClerkGuard implements CanActivate {
  private clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  });

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const authHeader = request.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) throw new UnauthorizedException('No token provided');

    try {
      const session = await this.clerkClient.verifyToken(token);
      request.user = session;
      return true;
    } catch (err) {
      console.error('Clerk token verification failed:', err);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
