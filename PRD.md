# PRD: Blackbox concept site

This PRD is written from `PROPOSAL.md`. Corrections from the brief are marked below. The site explains Yash Shah's idea. It does not operate an agent, store an email, or imply that a waitlist exists.

## First five seconds

The person who opens the home page is a student who already uses an AI assistant and is unsure who is in charge when it acts. In the first five seconds they need the name BLACKBOX, the line that agent companies will not audit themselves, and a receipt that says the record is theirs. They should not see a login, a price, or a form.

## Product

Blackbox is a proposed local-first layer between a person and the agents that can message, spend, and act for them. The site has one job: make the idea understandable and make the early-access state honest.

**Client:** Yash Shah, junior at Babson College.
**Builder:** Royce Myers, for OIM 3690.
**Out of scope:** accounts, a real agent connection, payments, analytics that identify a visitor, and any field that accepts an email address.

## Audience and action

Visitors are Babson students and peers who let an assistant draft, send, or buy. They need the vocabulary (receipts, rules, the gate) and a single next step.

The action is to open How it works, then check early-access status. That status says signup is not live. A disabled "Waitlist coming soon" label is the control. It is not a button that submits anything.

**Correction:** an earlier pass of this PRD described a waitlist form with an email field and a `required` attribute. That is removed. Yash said no address is collected until there is a backend and a privacy notice.

## Pages

Same header and footer on every page. Header links: Home, How it works, Why, Get access. The current page uses `aria-current="page"`. Get access on Home points at `#early-access`. On the other pages it points at `index.html#early-access`.

### Home

- Eyebrow: "The layer on your side."
- Title: BLACKBOX, with BOX in the accent color.
- Lede: "Agent companies won't audit themselves."
- Sublede: agents can send, spend, and act; Blackbox is the proposed local-first layer to see what happened, set limits, and make the final call.
- Primary action scrolls to early access.
- Receipt specimen: "BLACKBOX / RECEIPT", "THE RECORD IS YOURS.", three rows (message recorded, purchase reviewed, approval is your call), caption "Illustrative activity, not a live agent feed."
- Section "Know. Bound. Decide." with three articles: Receipts, Rules, The Gate.
- Quote: rules should travel with you when you use more than one agent.
- Early access: concept in development, signup is not live, no address is collected, disabled waitlist label, note "No address is being collected."

### How it works

- Eyebrow: "Inside the system / concept preview."
- Title: "The layer between intent and action."
- Three features, copy and panel, the middle one reversed:
  1. Receipts. Example events: drafted an email, asked before sending, purchase above limit blocked. Disclaimer that nothing is connected.
  2. Rules. Example policy: spend without asking up to $50, first message to an investor asks first, public posts ask first. Disclaimer that the controls are not active.
  3. The Gate. Example prompt: "Send this message to a new contact?" Approve and Decline are labels, not controls. Disclaimer that they do not take action.
- Close links to early-access status.

### Why

- Title: "Trust is not a setting."
- Short paragraphs: asking agents to act is different from asking them to write; an email cannot be unsent; the answer is a record and a few boundaries; receipts, rules, and the gate; the assistant and the oversight should both work for you.
- Same early-access close.

### Footer

"© 2026 BLACKBOX / A CONCEPT IN DEVELOPMENT" and "YOUR AGENTS. YOUR RULES."

## Design system

Who it is for, in one sentence: a student opens this page to see, in one glance, that Blackbox is on their side of the agent and that the record belongs to them.

Six custom properties, written down before CSS:

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#090b0a` | Page background |
| `--panel` | `#101512` | Cards and example panels |
| `--line` | `#28332b` | Hairline borders |
| `--white` | `#f1f2e9` | Body text |
| `--muted` | `#a0ad9e` | Secondary text |
| `--acid` | `#c4f36e` | Accent, current link, status |

Type: `DM Mono` for the name, navigation, labels, and receipts. `DM Sans` for sentences and the Why column. Both load from one Google Fonts import in `styles.css`.

Layout uses CSS Grid for the hero, the three pillars, the statement, and the feature rows. Flexbox is used in the header, nav, receipt rows, and footer. Below 900px the hero, statement, and features become one column. Below 640px the header stacks and the pillar grid is one column. Navigation stays on screen.

Do not add: stock photography, a gradient mesh hero, a fake logged-in app frame, icon libraries, or a second stylesheet.

## Content rules

- Copy is Yash's idea in his words from the interview. No lorem ipsum.
- Every example is labeled illustrative.
- Dollar amounts and policy lines are examples, not settings a visitor can change.
- The B mark is a stand-in. There is no logo file.

## Requirements checklist

- Three pages, one shared navigation pattern.
- `header`, `nav`, `main`, `footer`, and `section` on each page.
- One external stylesheet, `styles.css`, linked from each page.
- Favicon: `favicon.svg`.
- Readable without horizontal scrolling at a phone width.
- Deployed with GitHub Pages from the repository root: https://roycemy.github.io/blackbox-agent-trust/

## Correction log

- Removed the email waitlist. Replaced it with a non-submitting status.
- Required the receipt, policy, and gate panels to say they are examples. A first draft described them as a live activity feed.
- Kept Approve and Decline as text, not `<button>` elements, so they cannot be mistaken for working controls.
