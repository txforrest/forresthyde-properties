# Forrest Hyde — 316 Realty Group

Production marketing website for Texas Realtor® **Forrest Hyde** (TREC #701231), sponsored by **Tim Goss** / **316 Realty Group**.

- **Live domain:** [www.forresthyde.properties](https://www.forresthyde.properties) (DNS already points at Vercel)
- **Stack:** Next.js App Router, TypeScript, Tailwind CSS

## Local development

```bash
cd forresthyde-properties
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

The domain `www.forresthyde.properties` already points at Vercel. To deploy this repo:

1. Push the project to GitHub (or connect the folder via the Vercel CLI / dashboard).
2. In [Vercel](https://vercel.com): **Add New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). Build command: `npm run build`. Output: default.
4. Assign the existing domain `www.forresthyde.properties` (and apex if desired) under **Project → Settings → Domains**.
5. Deploy. Subsequent pushes to the production branch auto-deploy.

CLI alternative:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Contact form (Formspree)

The homepage lead form posts to a **Formspree placeholder**:

`https://formspree.io/f/YOUR_FORM_ID`

Before go-live, create a form at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` in `src/lib/site.ts` (`site.formspreePlaceholder`). Until then, visitors can use the Call CTA or email `ForrestHydeRealtor@gmail.com` directly.

## TREC compliance

Homepage footer includes required links (labels exact):

1. **TREC Consumer Protection Notice** → official TREC PDF  
2. **TREC Information About Brokerage Services** → `/iabs`

The `/iabs` page is a completed IABS 1-2–style notice for Forrest Hyde and broker Tim Goss, with a secondary link to the blank official PDF.

## Key contact info

| Field | Value |
| --- | --- |
| Agent | Forrest Hyde · TREC #701231 |
| Phone | 512-826-4568 |
| Email | ForrestHydeRealtor@gmail.com |
| Broker | Tim Goss · TREC #621929 |
| Brokerage | 316 Realty Group |
| Market | Texas · specialty Williamson County · based Georgetown, TX |

## Project structure

```
src/app/page.tsx          Homepage
src/app/iabs/page.tsx     IABS notice
src/components/           Header, Footer, Hero, Services, etc.
src/lib/site.ts           Single source of truth for contact / TREC data
public/logo-316.png       316 Realty Group logo
```
