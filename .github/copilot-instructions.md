# Copilot instructions

# ──────────────────────────────────────────────

# ABOUT THIS REPO

# ──────────────────────────────────────────────

## Project overview

This is a Next.js repo managed with [pnpm workspaces].

Stack:

- Framework: Next.js [15] with App Router
- Language: TypeScript (strict mode)
- Styling: [Tailwind CSS | CSS Modules | styled-components]
- Data fetching: [server actions]
- Testing: [Vitest] + React Testing Library
- Package manager: [pnpm]

# ──────────────────────────────────────────────

# CODE STYLE & CONVENTIONS

# ──────────────────────────────────────────────

## TypeScript

- Always use strict TypeScript. No `any` — use `unknown` and narrow with type guards.
- Prefer `type` over `interface` for object shapes; use `interface` only for extensible contracts.
- Export types from a dedicated `types.d.ts` file per module, not inline from implementation files.
- Use `satisfies` operator instead of casting with `as` where possible.
- All async functions must handle errors explicitly — no unhandled promise rejections.

## Components

- All components are React functional components with named exports. No default exports from component files.
- Props types are defined directly above the component with `type Props = { ... }`.
- Use Server Components by default in the App Router. Add `'use client'` only when necessary (interactivity, browser APIs, hooks).
- Co-locate component styles, tests, and stories in the same directory:
  components/Button/
  button.tsx
  button.test.tsx
  index.ts (re-exports only)
- Reference an existing component for pattern: src\app\giving_components\giving.tsx

## Naming conventions

- Components: PascalCase (`UserProfileCard`)
- Hooks: camelCase prefixed with `use` (`useAuthSession`)
- Utilities: camelCase (`formatCurrency`)
- Constants: SCREAMING_SNAKE_CASE (`MAX_RETRY_COUNT`)
- Files: kebab-case for component and non-component files (`auth-helpers.ts`)
- Database/API fields: snake_case. Transform to camelCase at the API boundary.

## File & folder structure

Follow this pattern for new features:
app/(routes)/[feature]/
page.tsx — route entry, thin — delegates to a feature component
layout.tsx — route layout if needed
loading.tsx — loading UI (Suspense boundary)
error.tsx — error boundary
features/[feature]/
components/ — UI components scoped to this feature
hooks/ — feature-specific hooks
utils/ — feature-specific utilities
types.ts — feature-specific types
api.ts — data fetching / mutations for this feature

# ──────────────────────────────────────────────

# PATTERNS TO FOLLOW

# ──────────────────────────────────────────────

## Data fetching

- In Server Components, fetch data directly using async/await — do not use `useEffect` for data fetching. Only use `useEffect` in client components if necessary.
- In Client Components, use `useEffect` to call api.
- API routes live in src/actions or if api routs are necessary use app/api

## Error handling

- Use Next.js `error.tsx` boundaries at the route level.
- Throw `new Error(message)` with a descriptive message — never swallow errors silently.

## State management

- Local UI state: `useState` / `useReducer`.
- Server state (async): [React Query | SWR] — single source of truth.
- Global client state: [Zustand store in `stores/`] — keep stores small and scoped.
- Never store derived data in state — compute it.

## Styling

- Use Tailwind utility classes. No inline `style={{}}`. if a dynamic className is needed, use clsx library.
- Design tokens live in tailwind.config.ts. Use token names, not raw values.
- if a specific style is used multiple times, create a global class in tailwind and reuse it across the app.

# ──────────────────────────────────────────────

# PATTERNS TO AVOID

# ──────────────────────────────────────────────

## Never do these

- No `any` type — ever.
- No `console.log` in committed code — use the logger.
- No default exports from component or utility files.
- No `useEffect` for data fetching (unless its necessary in the client component) — use server components or a query library.
- No direct DOM manipulation — use React refs and state.
- No direct database access from UI components or API routes — go through the service layer in lib/services/.
- No mutations inside `GET` handlers.
- Do not add new dependencies without checking if a utility already exists in packages/utils.

# ──────────────────────────────────────────────

# TESTING

# ──────────────────────────────────────────────

## Testing requirements

- Every exported function in `utils/` must have a corresponding unit test.
- Components must have tests covering: render, user interaction (if interactive), and edge cases.
- Mock external services (API calls, auth) at the module boundary, not inside test bodies.
- Test file naming: `[component-name].test.tsx` or `[util-name].test.ts` — co-located with the source file.
- Reference: src\app_components\_\_tests\_\_\navbar.test.tsx

# ──────────────────────────────────────────────

# PR & COMMIT CONVENTIONS

In the PR description, answer these templates:

- What do I need to understand with these changes
- What does this PR do
- How can I mnanually test this PR
- What are you not sure of
- Are there any blockers

# ──────────────────────────────────────────────

## Commits & PRs

- Follow Conventional Commits: `feat:`, `fix:`, `chore:`, `refactor:`, `test:`, `docs:`.
- Each commit should be atomic — one logical change per commit.
- PR titles must match the commit convention and reference the Linear ticket: `feat(auth): add OAuth2 login [LIN-123]`
- Keep PRs under 400 lines changed where possible. Split larger changes into stacked PRs.
- Every PR must include or update tests. PRs without tests require an explicit comment explaining why.

# ──────────────────────────────────────────────

# REFERENCE FILES

# Copilot: read these before generating code

# for the relevant domain.

# ──────────────────────────────────────────────

## Key reference files

| Domain            | Reference file                               |
| ----------------- | -------------------------------------------- |
| Component pattern | `\app\_components\main-hero.tsx`             |
| API route pattern | `app/api/users/route.ts`                     |
| Hook pattern      | `features/auth/hooks/useAuthSession.ts`      |
| Service layer     | `lib/services/user-service.ts`               |
| Error types       | `/utils/src/errors.ts`                       |
| Tailwind config   | `tailwind.config.ts`                         |
| Logger usage      | `lib/logger.ts`                              |
| TypeScript config | `tsconfig.base.json`                         |
| Test pattern      | `\app\_components\__tests__\navbar.test.tsx` |
