# PayMe-website-

Standalone, English-only marketing site for PayMe.

## Run locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3004`. Use `npm run build` then `npm start` for a production build.

## Structure

- `app/` contains the App Router pages, metadata, contact route, sitemap and robots.
- `components/` contains the shared navigation, footer, cards, calculator and contact form.
- `content/site.ts` contains English site copy.
- `content/pricing.ts` contains plans, prices, comparison features and pricing FAQs.
- `tailwind.config.js` defines the shared typography scale and font families.

Edit site copy in `content/site.ts` and annual prices in `content/pricing.ts`. The contact form submits to `/api/contact`, which validates and logs requests as a placeholder without saving or emailing them.

Manrope headings and DM Sans body/UI fonts load through `next/font/google`. The generated font variables are attached to the body and used in Tailwind's font family config. Privacy and Terms pages are placeholders and need legal review before launch.
