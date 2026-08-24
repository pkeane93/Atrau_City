# Atrau City

Marketing website for Atrau City — two modern residential buildings with studio, 2-bedroom and 3-bedroom apartments and commercial spaces in Atyrau, Kazakhstan. Delivery 2028.

Live site: https://atrau-city.sliplane.app/

## Stack

Static HTML/CSS/JS site:

- **Tailwind CSS** (via CDN) for styling
- **Stimulus-style controllers** (`javascript/controllers/`) for navbar, carousel, and gallery interactivity
- **Tabler Icons** for iconography
- **Cloudinary** for image hosting
- **Nginx** (via Docker) to serve the site in production

## Project structure

```
views/               Page markup (index, about, gallery, contact)
views/shared/         Shared navbar, hero, and footer partials
javascript/           Page scripts and Stimulus controllers
styles.css            Global styles
images/                Site assets (favicon, etc.)
assets/                 Project documents (design PDFs)
Dockerfile             Nginx-based container for deployment
```

## Running locally

This is a static site with no build step or dependencies. Serve the project root with any static file server, for example:

```bash
npx serve .
```

Then open `views/index.html` in the browser.

## Deployment

The site is containerized with Nginx:

```bash
docker build -t atrau-city .
docker run -p 8080:80 atrau-city
```
