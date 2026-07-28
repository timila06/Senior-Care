# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router project written in TypeScript.

- `src/app/` contains routes, metadata, sitemap, robots configuration, and global styles.
- `src/components/` contains shared site sections. Reusable shadcn-style primitives live in `src/components/ui/`.
- `src/lib/site-data.ts` is the source of truth for navigation, services, and site details.
- `src/types/` contains shared TypeScript models.
- `public/images/` contains clearly identified mockup photography.
- `tests/site.spec.ts` contains Playwright route and form smoke tests.
- `Dockerfile` and `docker-compose.yml` define the production container workflow.

Use the `@/` alias for imports from `src/`.

## Build, Test, and Development Commands

- `npm.cmd install`: install dependencies from `package.json`.
- `npm.cmd run dev`: start the local Next.js development server.
- `npm.cmd run lint`: run ESLint across the repository.
- `npm.cmd run typecheck`: run TypeScript without emitting files.
- `npm.cmd run build`: create the production Next.js build.
- `npm.cmd run test:e2e`: run Playwright tests on desktop and mobile viewports.
- `docker compose up --build`: build and serve the production container.

Run lint, type checking, and Playwright tests before submitting changes.

## Coding Style & Naming Conventions

Use two-space indentation, semicolons, double quotes, and typed function boundaries. Components use PascalCase exports and kebab-case filenames, such as `ServiceOverview` in `service-overview.tsx`. Route folders and URLs use lowercase names.

Prefer Server Components. Add `"use client"` only for required interaction. Reuse design tokens from `globals.css`, Phosphor icons, and existing UI primitives. Do not add unsupported services, medical claims, statistics, or contact details.

## Testing Guidelines

Use Playwright for user-visible behavior. Name tests by outcome, for example `inquiry validates and remains local`. New routes require render and navigation coverage at desktop and mobile sizes. Forms must remain client-only and must not create network requests or store submitted values.

## Commit & Pull Request Guidelines

The repository has no established commit history. Use short imperative commits, optionally following Conventional Commits: `feat: add visit scheduling section`.

Pull requests should include a concise summary, testing results, linked issue when applicable, and screenshots for visual changes. Call out accessibility, responsive-layout, copy, or Docker changes explicitly.

## Security & Configuration

Never commit credentials or personal health information. `.codex/config.toml` may define MCP endpoints but must contain no OAuth tokens. Mockup images must not be presented as actual Willow Grove residents or premises.
