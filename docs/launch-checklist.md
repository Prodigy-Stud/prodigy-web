# WEB-12 Launch Checklist

## Pre-deploy

- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] Verify `NEXT_PUBLIC_SITE_BASE_PATH` is set for GitHub Pages deploy
- [ ] Verify `NEXT_PUBLIC_SITE_URL` points to the live host

## Visual QA

- [ ] Home, Product, Investors, Design, Resources, Team, Contact render without layout shift
- [ ] Dark/light toggle works and persists across routes
- [ ] Hero, pipeline, metrics, and outcomes sections respect reduced motion
- [ ] Video posters and thumbnails load on deployed GitHub Pages URL
- [ ] Logo strip and screenshots are visible and not stretched

## Route QA

- [ ] Direct-open each route with trailing slash on the deployed domain
- [ ] No 404 on `/product/`, `/investors/`, `/design/`, `/resources/`, `/team/`, `/contact/`
- [ ] Footer/header links navigate correctly from every page

## Cross-browser QA

- [ ] Chrome latest (desktop)
- [ ] Safari latest (desktop)
- [ ] Mobile Safari (iOS)
- [ ] Android Chrome

## Performance + SEO

- [ ] Confirm Open Graph/Twitter metadata on homepage and product page
- [ ] Validate generated `sitemap.xml` and `robots.txt`
- [ ] Confirm first paint stays smooth on mid-tier laptop hardware
