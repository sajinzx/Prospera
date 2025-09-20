# Prospera Backend (Scaffold)

This is a minimal backend scaffold for the Prospera project. It provides user authentication routes (signup/login) using Node.js, Express, MongoDB (Mongoose), bcrypt, and JWT.

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` from `.env.example` and update `MONGO_URI` and `JWT_SECRET`.

3. Start the server (dev):
   ```bash
   npm run dev
   ```

4. API endpoints:
   - `POST /api/auth/signup` — body: `{ username, email, phone, password }`
   - `POST /api/auth/login` — body: `{ email, password }`
   - `GET /api/auth/me` — header: `Authorization: Bearer <token>`

## Notes
- This is a scaffold. For production, add validation, rate-limiting, input sanitization, HTTPS, and proper error handling.
