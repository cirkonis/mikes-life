# mikes-life

A little place where I house the apps I build that I use the most.

One page, a card per app, no database. It exists so there's a single thing to keep
open on my phone instead of hunting for bookmarks.

## Stack

- **Nuxt 4**, **Tailwind CSS 4**
- Deployed on **Vercel** (`nitro.preset: 'vercel'`)
- No database, no auth, no API routes — it's a launcher

## Local setup

```bash
nvm use            # Node 22
npm install
npm run dev
```

## Adding an app

Everything lives in the `apps` array at the top of `app/pages/index.vue`. Add an
entry and it renders:

| Field | Meaning |
| --- | --- |
| `name` / `tagline` | Card title and one-liner |
| `url` | Opens in a new tab |
| `cadence` | How often it actually gets used — drives the ordering |
| `emoji` | Icon badge and the oversized watermark |
| `from` / `to` | Gradient stops |
| `accent` | Optional solid colour for the cadence pill (dark text) |

Cards are ordered by how often they're opened, not alphabetically. Each gradient
starts from that app's real brand colour — Macros blue, Finances rose, Yahtzee
red (with its yellow on the pill), Chicken Hunt orange, Bullies pink — then reaches toward a neighbouring hue so the page
as a whole reads as a rainbow.
