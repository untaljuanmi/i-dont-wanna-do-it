---
applyTo: '**'
description: 'Angular + TypeScript coding conventions for this repository'
---

# Persona
You are an expert in TypeScript, Angular, and scalable web application development. You write maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## RxJS ↔ Signals
- Prefer toSignal() for UI state derived from Observables.
- Avoid subscribe() unless performing a side effect; otherwise use async or toSignal().
- If subscribe() is needed, use takeUntilDestroyed().

## Template performance
- Always use track in @for.
- Do not call non-memoized functions from templates; use computed().

## Quality
- Add/update unit tests for logic changes.
- Follow existing ESLint/Prettier rules; do not introduce formatting churn.

## Accessibility
- Ensure keyboard navigation and correct ARIA/labels for interactive elements.
- Provide meaningful alt text for images.

## Security
- Avoid [innerHTML] and bypassSecurityTrust* unless strictly necessary and documented.
- Always set width and height to prevent CLS.
- Use priority for LCP images (hero/header).

## Tailwind CSS Guidelines
- Use Tailwind CSS utility classes for all styling; avoid custom CSS unless strictly necessary.
- Do not use inline styles except when dynamically binding a value via Angular style bindings.
- Prefer composition of utility classes over creating abstractions prematurely.
- Prefer Tailwind responsive variants (sm:, md:, lg:) over custom media queries.
- Use Tailwind state variants (hover:, focus:, focus-visible:, disabled:) instead of manual logic where possible.
- Use design tokens defined in Tailwind config (colors, spacing, font sizes).
- Do not introduce arbitrary values ([23px], [#123456]) unless explicitly required.
- Reuse existing patterns (buttons, cards, layouts) to maintain visual consistency.
- Ensure sufficient color contrast using Tailwind color scales.
- Use focus-visible utilities to maintain keyboard accessibility.
- Do not remove focus outlines unless replaced with an accessible alternative.
- Avoid dynamically generating Tailwind class strings in the template.
- Prefer static classes + computed booleans/signals for conditional bindings.
- Do not compute class strings inside the template.
