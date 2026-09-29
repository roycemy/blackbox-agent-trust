# Blackbox

A concept site for Yash Shah, a junior at Babson. Blackbox is his idea for a local-first trust layer for personal AI agents: receipts, rules, and a gate for decisions the owner has to make. The site is Royce Myers's OIM 3690 mini project.

The site has three pages: Home, How it works, and Why. It is a static HTML/CSS prototype. Illustrative receipts and controls are not connected to real agents. The waitlist is **not yet live** and no email addresses are collected. A real signup backend and privacy notice must be added before inviting people to join.

Live site: https://roycemy.github.io/blackbox-agent-trust/

## Local preview

Open `index.html` in a browser or run `python3 -m http.server` in this folder.

## Deployment

GitHub Pages serves the files from the `main` branch root.

## Required question

I did not accept the first UI pass. Commit [`fde7366`](https://github.com/roycemy/blackbox-agent-trust/commit/fde73662d62ea0b1657337a6ed9501dfc941f751) ("Add initial styles and font imports in styles.css") gave me a dark page, but it did not listen to the prompt. BLACKBOX was just big type. The receipt sat still, and Receipts, Rules, and The Gate did not come in on scroll.

I sent a second prompt that kept the copy, the three pages, and those pillars, and only changed the look and the motion: a decode on the title, a cursor light, a receipt that tilts toward the mouse, and cards that rise in as you scroll.
