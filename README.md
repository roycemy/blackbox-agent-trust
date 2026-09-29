# Blackbox

A concept site for Yash Shah, a junior at Babson. Blackbox is his idea for a local-first trust layer for personal AI agents: receipts, rules, and a gate for decisions the owner has to make. The site is Royce Myers's OIM 3690 mini project.

The site has three pages: Home, How it works, and Why. It is a static HTML/CSS prototype. Illustrative receipts and controls are not connected to real agents. The waitlist is **not yet live** and no email addresses are collected. A real signup backend and privacy notice must be added before inviting people to join.

Live site: https://roycemy.github.io/blackbox-agent-trust/

## Local preview

Open `index.html` in a browser or run `python3 -m http.server` in this folder.

## Deployment

GitHub Pages serves the files from the `main` branch root.

## Required question

I didn't like the first redesign. BLACKBOX was huge and it ran into the receipt on the right. That is not what I asked for.

I fixed it in commit [`9456ff4`](https://github.com/roycemy/blackbox-agent-trust/commit/9456ff425743e2059cd82837387e6c24f6f0de55) ("Add breathing room around hero receipt"). I made the title smaller so the card had some space next to it.
