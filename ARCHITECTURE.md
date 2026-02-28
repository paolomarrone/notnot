# LLM Instructions: Modular Product Build

## Purpose
You are building a new product as an application composed of small, composable modules. Optimize for maintainability, clarity, and small independently testable units.

## Core Constraints (Non-Negotiable)
1. **Modular by default**  
   - Implement features as **small files** and **small components**.
   - Each module/component/program must **do one thing well** (single responsibility).
   - Prefer composition over large “god” files.

2. **Heavily use HTML components**  
   - UI must be composed from **small HTML components** (template partials/components).
   - Components must be reusable, parameterizable, and colocated with their related assets when appropriate.

3. **Small css files**
   - A css file for every component, page, logical element. Use a main style.css that includes them all

3. **Use small Go programs**  
   - Backend logic should be implemented as **small Go packages/programs** with clear boundaries.
   - Each Go package/program should expose a narrow API and avoid hidden side-effects.
   - Prefer many small focused packages over a few large ones.

4. **Logical directory structure**
   - Organize by responsibility/layer and feature boundaries.
   - Directory and file names must reflect their content and responsibility.
   - Avoid dumping everything into one folder. No “misc” or “stuff”.

5. **Naming conventions**
   - Names must be explicit and descriptive.
   - Use consistent casing and patterns across the codebase.
   - Files/components should be discoverable by name alone.

## Architectural Rules
- **UI**: componentized HTML; each component owns:
  - its template/markup
  - its minimal behavior hooks (if any)
  - its minimal styling hooks (if any)
- **Backend**: small Go units:
  - handlers: accept/validate requests, call services, return responses
  - services: business logic, no HTTP concerns
  - stores: persistence logic, no business logic
- **No cross-layer leakage**:
  - handlers do not contain business rules
  - stores do not implement business rules
- **Prefer explicit dependencies** (dependency injection or constructor functions).

## Implementation Guidelines
- Before adding a new file, ask: **“What single responsibility does this file own?”**
- If a file grows beyond a clear single responsibility, **split it**.
- Prefer small functions with tight names over long functions with comments.
- Keep interfaces small; avoid “catch-all” types and mega-structs.

## Dependencies
- We try to not use any third party dependency at all

## Output Expectation From You (the LLM)
When producing code or changes:
- create minimal, focused modules
- place them in the correct logical directory
- name files and symbols to match their responsibility
- avoid large monolithic implementations
- default to reusable HTML components and small Go packages/programs