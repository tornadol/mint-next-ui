# Singapore Mint — Next.js export

## Deploy to Vercel

1. `npm install`
2. `npm run dev` — local preview at http://localhost:3000
3. Push to GitHub, import to Vercel — auto-detected as a Next.js project.

## Structure

- `public/` — the entire website (HTML pages + assets), served as-is by Next.js.
- `pages/` — Next.js routing shell. `/` redirects to the homepage; all other routes map to files under `public/ui_kits/website/` via `next.config.js` rewrites.

To customize URLs, edit the `pages` array in `next.config.js`.
