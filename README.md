# kushvyas-personal-site

A minimal, modern personal site built with **Next.js 14 (App Router)** + **Tailwind CSS** + **TypeScript**, ready to deploy on Vercel.

All editable content lives at the top of `app/page.tsx` — `PROFILE`, `PROJECTS`, and `EXPERIENCE`. Update those constants and the rest of the page updates itself.

---

## 1. Run it locally (optional, but recommended once)

```bash
cd personal-site
npm install
npm run dev
```

Open http://localhost:3000 to see the site.

> If you don't have Node.js: install it from https://nodejs.org (LTS is fine).

---

## 2. Push it to GitHub

You already have a GitHub account connected (`kushvyas-111`). From inside the `personal-site` folder:

```bash
git init
git add .
git commit -m "Initial commit: personal site"
git branch -M main

# Create the GitHub repo first (one-time), e.g. via https://github.com/new
# Name it: kushvyas-personal-site (or whatever you like)

git remote add origin https://github.com/kushvyas-111/kushvyas-personal-site.git
git push -u origin main
```

If you have the GitHub CLI installed, this is one line:

```bash
gh repo create kushvyas-personal-site --public --source=. --remote=origin --push
```

---

## 3. Deploy on Vercel

You already have the New Project page open at https://vercel.com/new.

1. Under **Import Git Repository**, click the dropdown and pick `kushvyas-personal-site` (you may need to hit the refresh icon if it doesn't show up immediately).
2. Click **Import**.
3. Vercel auto-detects Next.js — leave all settings as-is.
4. Click **Deploy**.

You'll get a live URL like `kushvyas-personal-site.vercel.app` in ~60 seconds.

### Custom domain (optional)
Project → **Settings → Domains** → add your domain (e.g. `kushvyas.com`) and follow the DNS instructions.

---

## 4. Editing later

Open `app/page.tsx` — everything you'll want to change is at the top:

- `PROFILE` — name, headline, about paragraph, email, GitHub, LinkedIn.
- `PROJECTS` — each entry is `{ title, blurb, href, tags }`. Add/remove freely.
- `EXPERIENCE` — each entry is `{ role, org, period, bullets }`.

Search for `TODO` to find the spots I left placeholders (mainly your LinkedIn URL and the second experience entry).

After any edit, commit + push — Vercel redeploys on every push to `main`.

```bash
git add .
git commit -m "Update content"
git push
```

---

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS 3
- Deployed on Vercel
