# 🚀 Pro-Nest AI Kit

A production-ready, high-performance Monorepo for building AI-powered SaaS applications. Built with a focus on type safety, metered billing (token tracking), and rapid deployment.

## 🏗 The Stack

- **Monorepo:** [Turborepo](https://turbo.build/) (Next.js + Nest.js)
- **Frontend:** Next.js 15 (App Router), Tailwind CSS, Shadcn/UI
- **Backend:** Nest.js (Modular Architecture, Global DB Provider)
- **Database:** [Neon Postgres](https://neon.tech/) (Serverless Postgres 17)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/) (Type-safe SQL, Auto-migrations)
- **Auth:** [Clerk](https://clerk.com/) (Middleware-protected, JWT-based API security)
- **Language:** TypeScript (Strict Mode)

---

## 📂 Project Structure

```text
.
├── apps
│ ├── web # Next.js Frontend (Port 3000)
│ └── api # Nest.js Backend (Port 3001)
├── packages
│ └── typescript-config # Shared TS configurations
├── package.json
└── turbo.json
```

---

## ⚙️ Features Implemented

### 🛡️ Secure API Layer

Implemented a custom `ClerkGuard` in Nest.js that validates JWTs from the frontend. All AI routes are protected by default to prevent credit leakage.

### 📊 Token-Based "FinOps"

The Postgres schema includes a `token_balance` column in the `users` table. The backend is wired to deduct credits based on AI usage, allowing for immediate SaaS monetization.

### ⚡ Database Speed

Utilizes Neon's serverless driver for sub-10ms queries and Drizzle's `push` mechanism for "no-headache" schema migrations.

---

## 🚀 Getting Started

### 1. Prerequisites

- Node.js (v20+)
- Clerk Account (API Keys)
- Neon Database Instance

### 2. Environment Setup

Create a `.env` file in `apps/api` and `apps/web`:

**`apps/api/.env`**
```env
DATABASE_URL=postgresql://...
CLERK_SECRET_KEY=sk_test_...
CLERK_PUBLISHABLE_KEY=pk_test_...
```

**`apps/web/.env.local`**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 3. Install & Run

```bash

# Install dependencies for all apps

npm install

# Push the schema to Neon

cd apps/api
npx drizzle-kit push

# Start everything in development mode

cd ../..
npm run dev
```

---

## 🛠 Roadmap (Next Steps)

- [ ] **User Sync:** Implement a Webhook to sync Clerk Users to Postgres on first login.
- [ ] **AI Stream:** Integrate OpenAI/Anthropic with Server-Sent Events (SSE).
- [ ] **Stripe Integration:** Add a "Top-up" button to purchase more AI tokens.
- [ ] **UI Components:** Build the "Dev Assistant" playground using Shadcn/UI.

---

## 📝 License

MIT
