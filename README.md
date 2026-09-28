# Blackbox

A concept site for Yash Shah, a junior at Babson. Blackbox is his idea for a local-first trust layer for personal AI agents: receipts, rules, and a gate for decisions the owner has to make. The site is Royce Myers's OIM 3690 mini project.

The site has three pages: Home, How it works, and Why. It is a static HTML/CSS prototype. Illustrative receipts and controls are not connected to real agents. The waitlist is **not yet live** and no email addresses are collected. A real signup backend and privacy notice must be added before inviting people to join.

Live site: https://roycemy.github.io/blackbox-agent-trust/

## Local preview

Open `index.html` in a browser or run `python3 -m http.server` in this folder.

## Deployment

GitHub Pages serves the files from the `main` branch root.

## Required question

I kept the first version of How it works. It is commit [`7f0dde4`](https://github.com/roycemy/blackbox-agent-trust/commit/7f0dde43c34d46b389b052c701988d22013cda64) ("Explain receipts, rules and approval gate").

I checked that commit by serving the repo and opening `how-it-works.html`, then the same URL on GitHub Pages. The header links match Home and Why. The page has the three sections Yash asked for: receipts, rules, and the gate. Each panel says the example is not a live agent. Approve and Decline are text, not controls that send a message. The early-access link goes to the home section that says no address is collected. Those checks are why I left the page as it was committed.
