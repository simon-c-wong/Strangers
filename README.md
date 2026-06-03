# Strangers — A Connection Card Game

A browser-based card game inspired by _We're Not Really Strangers_. Pick a
deck, take turns drawing questions, and move through three levels that deepen
as you go — warm-up, then vulnerable, then the questions you don't usually get
asked. Each deck names its levels in its own voice (e.g. Couples runs
_Affection → Intimacy → Devotion_; Healing runs _Acknowledgment → Mourning →
Renewal_). No surface-level small talk.

Once the page loads, the whole game works **offline** — every question is
bundled into the app, and a service worker caches it for repeat visits. No
accounts, no tracking, no network required.

## Decks

| Deck | For |
| --- | --- |
| 🫂 Friends | People who already know each other |
| ❤️ Couples | Partners who want to keep discovering each other |
| 💫 Dating | Getting to know someone new |
| 🏡 Family | Parents, siblings, and the people who raised you |
| 🪞 Self-Reflection | Playing solo, or reading aloud together |
| 💼 Coworkers | Teams who barely know each other |
| 🤞 Best Friends | The ride-or-die |
| 🩹 Healing & Heartbreak | Loss, breakups, and starting over |

Each deck has three levels with ~12 questions each. Edit them in
[`src/data/questions.ts`](src/data/questions.ts).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Tech

- React 18 + TypeScript
- Vite
- `vite-plugin-pwa` for offline support
- Plain CSS (no UI framework)

## Deploy to GitHub Pages

The build is configured with a **relative base path** (`base: "./"`), so the
contents of `dist/` work whether they're served from a user page
(`username.github.io`) or a project page (`username.github.io/strangers/`).

```bash
npm run deploy   # builds and publishes dist/ to the gh-pages branch
```

Then enable Pages in the repo settings (Settings → Pages → Branch: `gh-pages`).
