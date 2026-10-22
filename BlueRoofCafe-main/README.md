# Blue Roof Cafe

Frontend-only website for Blue Roof Cafe (React + Vite + Tailwind).

```
demo/       Static demo of the site (open demo/index.html in a browser, no install needed)
frontend/   React app (Vite, Tailwind, Ant Design, Framer Motion)
```

## Run it locally
You need Node.js 18+.

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

Build for hosting (Vercel, Netlify, GitHub Pages...): `npm run build` (output in `frontend/dist`).

## Note
This project has no backend. Pages that talk to a server (sign up / login, reservations,
event booking, admin events, feedback and newsletter forms) need an API at `VITE_BACKEND_URL`
(see `frontend/.env.example`). Without one, those forms will show an error; all other pages
(home, menu, boardgames, membership, about, owner) work as normal.

## Before you go live
- Replace the placeholder contact details and social links in `frontend/src/components/Shared/footer/Content.jsx`.
- Replace the sample customer reviews in `frontend/src/components/ui/ReviewCarousel.jsx`.
- Replace the menu items and prices in `frontend/src/components/Pages/MenuPages.jsx/`.
