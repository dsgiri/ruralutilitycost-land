Act as a senior engineering manager, staff software engineer, and AI coding workflow architect. This file serves as the definitive instruction set for AI coding agents to ensure consistent, high-quality, and safe repository maintenance.

# Purpose
This repository is dedicated to the development and maintenance of [PROJECT_NAME]. This file provides reusable, repo-level instructions to AI coding agents to ensure predictable, clean, and safe development.

# Project Priorities
* Build useful tools that solve specific, painful user workflows.
* Keep UX practical, performant, and mobile-first.
* Support growth and discoverability through specific, topically focused content.
* Keep code simple, maintainable, and readable.
* Make pages conversion-oriented and clear.
* Avoid "platform" thinking or overengineering unless explicitly requested.

# Agent Operating Rules
* Work in small, incremental steps.
* Do not rewrite unrelated files.
* Preserve existing behavior unless intentionally changing it.
* Prefer editing existing files over creating duplicates.
* If blocked, leave a clear note in the code or task summary.
* Do not invent fake APIs, integrations, or data structures.
* Do not add dependencies unless necessary; explain why if you do.
* Avoid unnecessary abstractions; favor simplicity.
* Keep implementation production-minded.
* Prefer semantic HTML, accessible UI, and clean structure.
* Do not use placeholder marketing fluff.
* Always make output specific to the project's domain when relevant.

# Product and UX Rules
* Each feature must solve one narrow, painful workflow.
* Every page must explain the problem and solution in under 5 seconds.
* Mobile-first is mandatory.
* Avoid generic startup language and SaaS-isms.
* Avoid purple/blue AI gradients, glassmorphism, and generic icon grids.
* Use a practical, outcome-driven design.
* Copy must be plainspoken and action-oriented.
* Structure pages around problems, workflows, trust, and clear CTAs.
* Ensure pages are easy to scan.
* Use strong visual hierarchy.
* Keep forms short, useful, and error-tolerant.

# SEO and Content Rules
* One primary keyword theme per page.
* One H1 only.
* Use descriptive title tags and meta descriptions.
* Use internal links to related tools and guide pages.
* Add FAQ sections when relevant.
* Use natural-language headings.
* Write for real users first, search engines second.
* Avoid keyword stuffing.
* Favor problem-based search intent.
* Keep pages topically focused.
* Tool pages must include: Definition, Who-it’s-for, What-problem-it-solves, Core features, and FAQ structure.

# Code Style and Implementation Preferences
* Keep components small, readable, and reusable.
* Use descriptive naming conventions.
* Avoid magic constants.
* Prefer explicit logic over clever, hidden shortcuts.
* Keep CSS organized; do not over-nest styles.
* Avoid giant files.
* Preserve accessibility (semantic HTML, alt tags, focus management).
* Minimize JavaScript where HTML/CSS is sufficient.
* Use comments only where they add real, non-obvious value.
* Prefer production-ready code over demo hacks.

# File and Folder Expectations
* Keep names descriptive and kebab-case.
* Landing pages: /pages or /landing.
* Tool apps: /tools/[tool-name].
* Shared components: /components/shared.
* Content/Docs: /content.
* Assets: /public/assets.
* Do not create duplicate versions of the same component.
* Prefer predictable, logical file locations.

# Build Workflow
* Understand the task requirements clearly.
* Inspect existing files to identify patterns.
* Reuse existing patterns and components already in the repo.
* Implement the smallest, correct change possible.
* Review for UX, SEO, and accessibility compliance.
* Run tests/linting if available.
* Summarize what changed in your output.
* Avoid broad, speculative rewrites.

# Testing and Validation
* Run tests and lint if present.
* Check mobile layout responsiveness.
* Check for console errors.
* Validate heading hierarchy (H1, H2, H3).
* Validate CTA visibility and link functionality.
* Validate forms and error states.
* Ensure no placeholder text remains.
* Check accessibility basics (aria-labels, contrast).
* If commands are unknown, inspect package.json scripts rather than guessing.

# Safety and Change Control

## Hard Stop Rules
* Default rule: Do not delete, overwrite, rename, move, replace, or broadly refactor existing work without explicit user consent.
* Never delete any file without explicit user approval.
* Never overwrite or replace an existing file wholesale without explicit user approval.
* Never rename or move files/folders without explicit user approval.
* Never perform destructive refactors without explicit user approval.
* Never remove “unused” code, files, styles, content, or assets unless the user explicitly asks for cleanup.
* Never rewrite large sections of a file if a targeted edit can solve the task.

## Approval Required Before Proceeding
Any of the following changes require explicit consent:
* Deleting files
* Overwriting files
* Replacing page copy
* Moving folders
* Renaming files
* Broad refactors
* Dependency updates
* Config changes (deployment, env, db, auth, billing, analytics, SEO, routing)
* Schema/data changes

## Safe Editing Rules
* Make the smallest correct change to achieve the goal.
* Preserve user work; do not "fix" out-of-scope issues silently.
* Edit in place when possible.
* Leave notes instead of fixing out-of-scope issues.
* Create backups before risky replacement if you must replace.
* Prefer additive changes over destructive changes.
* If touching a sensitive file, minimize edits and preserve existing formatting.
* If an implementation looks wrong but is outside the requested scope, leave a note.
* No silent side effects. No stealth cleanup. No opportunistic refactors.
* Do not remove comments, docs, or content unless directly relevant to the task.
* Protect user-authored work by default.

## Change Summary Rules
* State which files you plan to touch.
* State whether any existing content will be replaced.
* Explicitly ask for approval if your plan involves risky changes.
* State potential risks before executing any risky operation.

## Prompting and Collaboration Rules
* This repo is used with "vibe coding" agents; assume high context, but be explicit about constraints.
* Follow structured instructions carefully.
* Return organized summaries of all changes.
* State assumptions when forced to make them.
* Do not ask unnecessary clarifying questions if the task is actionable.
* Break work into sections and maintain clean implementation logic.

## Definition of Done
* Task goal met.
* No broken layouts.
* No placeholder copy remains.
* Mobile-friendly.
* Accessible basics covered.
* SEO basics covered.
* No regressions introduced.
* Code is readable and maintainable.
* Summary of changes is ready.
