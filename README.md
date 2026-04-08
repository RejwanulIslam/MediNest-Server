# ⚙️ Medi Nest - Server Side (API)

The robust backend engine powering **Medi Nest**. It handles complex database relations, authentication, and secure payment integrations.

## 🌐 Links
- **API Live URL:** [https://medinext-server.vercel.app](https://medinext-server.vercel.app)
- **Frontend Repo:** [https://github.com/RejwanulIslam/Medi-Nest-Client](https://github.com/RejwanulIslam/Medi-Nest-Client)

## 🛠️ Technology Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL (Neon/Supabase)
- **Auth:** Better-Auth
- **Payment Gateway:** Stripe

## 🏗️ Database Schema Overview
The project uses PostgreSQL with Prisma to manage relationships between:
- **Users:** Managing roles (User, Seller, Admin).
- **Medicines:** Inventory management and categories.
- **Orders:** Tracking payments and delivery status.
- **Payments:** Integrated Stripe transaction logs.

## 🚀 Local Setup
1. Clone the repo: `git clone https://github.com/RejwanulIslam/MediNest-Server`
2. Install dependencies: `npm install`
3. Set up your `.env` file (DATABASE_URL, STRIPE_SECRET_KEY, etc.)
4. Run Prisma migrations: `npx prisma migrate dev`
5. Start server: `npm run dev`

## 📊 Evaluation Metrics
- **Clean Architecture:** Separation of routes, controllers, and services.
- **Error Handling:** Centralized error middleware.
- **Security:** JWT/Session based auth and input validation.