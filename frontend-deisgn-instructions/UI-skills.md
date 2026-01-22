Title: UI Skills

URL Source: https://www.ui-skills.com/

Markdown Content:
UI Skills - Opinionated UI constraints for agents
===============

UI Skills
=========

Opinionated constraints for building better interfaces with agents.

Installation
------------

npx bash

`npx ui-skills init`

Support Claude Code, Cursor, OpenCode and more.

Usage
-----

`/ui-skills  review src/`

C o p y

---

name: ui-skills

 description: Opinionated constraints for building better interfaces with agents. 

---

UI Skills
=========

When invoked, apply these opinionated constraints for building better interfaces.

How to use
----------

*   `/ui-skills`

 Apply these constraints to any UI work in this conversation.

*   `/ui-skills <file>`

 Review the file against all constraints below and output:

    *   violations (quote the exact line/snippet)
    *   why it matters (1 short sentence)
    *   a concrete fix (code-level suggestion)

Stack
-----

*   MUST use Tailwind CSS defaults unless custom values already exist or are explicitly requested
*   MUST use `motion/react` (formerly `framer-motion`) when JavaScript animation is required
*   SHOULD use `tw-animate-css` for entrance and micro-animations in Tailwind CSS
*   MUST use `cn` utility (`clsx` + `tailwind-merge`) for class logic

Components
----------

*   MUST use accessible component primitives for anything with keyboard or focus behavior (`Base UI`, `React Aria`, `Radix`)
*   MUST use the project’s existing component primitives first
*   NEVER mix primitive systems within the same interaction surface
*   SHOULD prefer [`Base UI`](https://base-ui.com/react/components) for new primitives if compatible with the stack
*   MUST add an `aria-label` to icon-only buttons
*   NEVER rebuild keyboard or focus behavior by hand unless explicitly requested

Interaction
-----------

*   MUST use an `AlertDialog` for destructive or irreversible actions
*   SHOULD use structural skeletons for loading states
*   NEVER use `h-screen`, use `h-dvh`
*   MUST respect `safe-area-inset` for fixed elements
*   MUST show errors next to where the action happens
*   NEVER block paste in `input` or `textarea` elements

Animation
---------

*   NEVER add animation unless it is explicitly requested
*   MUST animate only compositor props (`transform`, `opacity`)
*   NEVER animate layout properties (`width`, `height`, `top`, `left`, `margin`, `padding`)
*   SHOULD avoid animating paint properties (`background`, `color`) except for small, local UI (text, icons)
*   SHOULD use `ease-out` on entrance
*   NEVER exceed `200ms` for interaction feedback
*   MUST pause looping animations when off-screen
*   SHOULD respect `prefers-reduced-motion`
*   NEVER introduce custom easing curves unless explicitly requested
*   SHOULD avoid animating large images or full-screen surfaces

Typography
----------

*   MUST use `text-balance` for headings and `text-pretty` for body/paragraphs
*   MUST use `tabular-nums` for data
*   SHOULD use `truncate` or `line-clamp` for dense UI
*   NEVER modify `letter-spacing` (`tracking-*`) unless explicitly requested

Layout
------

*   MUST use a fixed `z-index` scale (no arbitrary `z-*`)
*   SHOULD use `size-*` for square elements instead of `w-*` + `h-*`

Performance
-----------

*   NEVER animate large `blur()` or `backdrop-filter` surfaces
*   NEVER apply `will-change` outside an active animation
*   NEVER use `useEffect` for anything that can be expressed as render logic

Design
------

*   NEVER use gradients unless explicitly requested
*   NEVER use purple or multicolor gradients
*   NEVER use glow effects as primary affordances
*   SHOULD use Tailwind CSS default shadow scale unless explicitly requested
*   MUST give empty states one clear next action
*   SHOULD limit accent color usage to one per view
*   SHOULD use existing theme or Tailwind CSS color tokens before introducing new ones

[GitHub](https://github.com/ibelick/ui-skills)·[Claude Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview?utm_source=ui-skills.com)·[llms.txt](https://www.ui-skills.com/llms.txt)

©2026[Interface Office](https://interfaceoffice.com/)