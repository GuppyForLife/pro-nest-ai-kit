import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">AI Dashboard</h1>
      <p className="mb-6">Welcome to your secure AI workspace.</p>
      
      {/* This button proves you are logged in and Clerk is working */}
      <div className="bg-gray-100 p-4 rounded-lg inline-block">
        <p className="text-sm text-gray-600 mb-2">Manage Account:</p>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}