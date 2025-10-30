# RideCore

Small ecommerce demo React + Vite + TypeScript project with Redux and Supabase wiring.

What I added during the code review session:
- Tests using Vitest + Testing Library with `src/setupTests.ts`.
- `cartSlice` now computes `total` automatically.
- A bunch of component/unit tests are present under `src/tests/`.

Quick start
1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build

```powershell
npm run build
```

4. Run tests

```powershell
npx vitest run --reporter verbose
```

Notes
- The project intentionally defaults `formatPrice` to `en-US`/`USD` for tests; adapt to app locale if required.
- Consider adding environment variables for Supabase in `.env`.
