# ELVIE Landing Page

Marketing landing page for ELVIE — the Clinical Intelligence Agent for medical imaging.
Seven visual themes, interactive demos, agentic platform section, mobile-responsive.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Deployment

Two supported paths. Choose one based on your environment.

---

### Path A — Vercel (public / hosted)

Push to GitHub. Vercel auto-deploys on every push to `main`.

```bash
git push origin main
```

The `NEXT_PUBLIC_VIEWER_URL` env var is not set on Vercel, so CTA buttons
("Request Access", "Watch Demo") default to scrolling to the CTA section
on the landing page itself.

If you want CTA buttons to link to an external viewer URL from Vercel,
set `NEXT_PUBLIC_VIEWER_URL` in the Vercel project settings:

```
NEXT_PUBLIC_VIEWER_URL=https://your-elvie-instance.example.com/index.html
```

---

### Path B — Self-hosted alongside elvie-server (Pi / local)

This path serves the landing page at `/landing/` on the same host as the
ELVIE viewer, so `elvie.ggg.ad/` redirects to `elvie.ggg.ad/landing/` and
"Request Access" links directly to the viewer at `/index.html`.

#### 1. Build the static export

```bash
NEXT_PUBLIC_VIEWER_URL=/index.html npm run build
```

This generates an `out/` directory. The `basePath: '/landing'` in
`next.config.ts` ensures all asset URLs are prefixed with `/landing/`
so they resolve correctly when served at `/landing/`.

#### 2. Push `out/` to the host

```bash
rsync -av --delete out/ george@paui:~/Downloads/src/ai/agentpacs/elvie-landing-dev/out/
```

Replace `george@paui` with your host. The path must match the volume mount
configured in `elvie-server/docker-compose.yml` (see step 3).

#### 3. Configure elvie-server

Two files in `elvie-server` need to be updated. See
[elvie-server README](../elvie-server/README.md#landing-page-integration)
for full details. In brief:

**`docker-compose.yml`** — add a volume to the `viewer` service:

```yaml
viewer:
  volumes:
    - ../elvie-landing-dev/out:/usr/share/nginx/landing:ro   # add this line
    - ../elvie-viewer/web:/usr/share/nginx/html:ro
    - ./config/nginx_viewer.conf:/etc/nginx/conf.d/default.conf:ro
```

**`config/nginx_viewer.conf`** — add landing routes (see elvie-server README
for the full config diff). Key additions:

```nginx
# Redirect bare root to landing
location = / {
    return 302 /landing/;
}

# Landing page
location /landing/ {
    alias /usr/share/nginx/landing/;
    index index.html;
    try_files $uri $uri/ /landing/index.html;
}
```

The original `location /` block for the viewer is preserved unchanged.

#### 4. Apply and restart

After modifying `docker-compose.yml` (volume change requires `up -d`):

```bash
cd ~/Downloads/src/ai/agentpacs/elvie-server
docker compose up -d viewer
```

After modifying only `nginx_viewer.conf` (config change, no volume change):

```bash
docker compose restart viewer
```

#### 5. Verify

```bash
curl -o /dev/null -w '%{http_code}\n' http://localhost:14175/          # 302
curl -o /dev/null -w '%{http_code}\n' http://localhost:14175/landing/  # 200
curl -o /dev/null -w '%{http_code}\n' http://localhost:14175/index.html # 200
```

#### Revert Path B

Backups are kept in `elvie-server/`:

```bash
cd ~/Downloads/src/ai/agentpacs/elvie-server
cp docker-compose.yml.bak docker-compose.yml
cp config/nginx_viewer.conf.bak config/nginx_viewer.conf
docker compose up -d viewer
```

#### Redeploy after landing page changes (Path B)

```bash
# In elvie-landing-dev:
NEXT_PUBLIC_VIEWER_URL=/index.html npm run build
rsync -av --delete out/ george@paui:~/Downloads/src/ai/agentpacs/elvie-landing-dev/out/
ssh george@paui "cd ~/Downloads/src/ai/agentpacs/elvie-server && docker compose restart viewer"
```

---

## Environment Variables

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_VIEWER_URL` | `#cta` | Where CTA buttons link. Set to `/index.html` for Pi, or a full URL for remote viewers. Baked in at build time. |

---

## Themes

Seven visual themes, switchable in the nav. Selection persists in `localStorage`.

| ID | Label | Style | Default |
|---|---|---|---|
| `command` | On-Call | Deep dark, cyan glow, Syne | ✓ |
| `clinical` | Clinical Precision | Light, dot-grid, teal, Instrument Serif | |
| `oncall` | Clinical Dark | Dark navy, teal, Antonio condensed | |
| `atlas` | Signal Atlas | Night sky, orbital diagram, Cormorant Garamond | |
| `shared` | Shared Review | Warm off-white, indigo/teal, Lora | |
| `thermal` | Deep Tissue | Near-black, thermal orange, Big Shoulders Display | |
| `surgical` | Surgical | Dark green-black, lime bio-green, Chakra Petch | |

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v12 |
| Icons | Lucide React |
| Fonts | Google Fonts (7 font families, see globals.css) |
| Theme | CSS custom properties on `data-theme` attribute |

## File Structure

```
elvie-landing-dev/
├── next.config.ts               # output: export, basePath: /landing
├── app/
│   ├── globals.css              # All 7 theme variables + animations
│   ├── layout.tsx               # Root layout, ThemeProvider
│   └── page.tsx                 # Page composition
├── components/
│   ├── theme/
│   │   ├── ThemeProvider.tsx    # Context + localStorage
│   │   └── ThemeSwitcher.tsx    # Dropdown UI
│   ├── layout/
│   │   ├── Nav.tsx              # Fixed nav, hamburger menu, active tracking
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx             # 7 theme-specific hero artworks
│       ├── Problem.tsx
│       ├── UnifiedWorkspace.tsx
│       ├── ReportUnderstanding.tsx
│       ├── ReportToImage.tsx    # Interactive finding → image demo
│       ├── AIChat.tsx           # Live chat demo
│       ├── AgenticPlatform.tsx  # MCP tools, REST API, playbooks
│       ├── BeyondImaging.tsx
│       ├── FutureCapabilities.tsx
│       ├── TargetUsers.tsx
│       ├── DesignPrinciples.tsx
│       └── FinalCTA.tsx
└── data/
    └── elvieContent.ts          # Shared content model + theme definitions
```
