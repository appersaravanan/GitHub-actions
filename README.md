# GitHub Actions CI Demo

[![CI Status](https://github.com/your-org/github_actions_demo/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/github_actions_demo/actions/workflows/ci.yml)
[![CodeQL](https://github.com/your-org/github_actions_demo/actions/workflows/codeql.yml/badge.svg)](https://github.com/your-org/github_actions_demo/actions/workflows/codeql.yml)
[![Coverage](./coverage/coverage-badge.svg)](#coverage-threshold) <!-- Local badge generated in CI and downloadable as artifact; replace with hosted badge (e.g. shields.io or Codecov) for public display. -->

This repository demonstrates a minimal Node.js + TypeScript project with a robust GitHub Actions CI setup (matrix strategy, caching, artifacts, coverage, reusable workflow). TeamCity references have been removed per project focus.

## Stack
- Node.js (TypeScript)
- Vitest (unit tests + coverage + JUnit)
- ESLint (flat config) & Prettier

## Quick Start
```bash
nvm use # or ensure Node >= 18
npm ci
npm run lint
npm run build
npm test
```

Run CLI:
```bash
node dist/index.js 4 7
```

## Scripts
| Script | Purpose |
|--------|---------|
| `build` | Compile TypeScript to `dist/` |
| `start` | Execute compiled CLI |
| `lint` | Run ESLint on `src` |
| `format` | Prettier write formatting |
| `test` | Run tests (JUnit XML) |
| `test:coverage` | Tests with coverage reports |

## GitHub Actions Workflows
| File | Purpose |
|------|---------|
| `ci.yml` | Matrix across Node versions & OS, caching, artifacts, coverage summary |
| `reusable-test.yml` | Reusable workflow invoked by `ci.yml` |
| `release.yml` | Tag-triggered release packaging |
| `codeql.yml` | Automated CodeQL security/code scanning |

## CI Focus
This project now focuses solely on GitHub Actions. Any previous TeamCity comparison content was removed to streamline onboarding.

### Coverage Threshold
`ci.yml` enforces a minimum line coverage of 90%. The build fails if the threshold is not met (adjust logic inside the "Enforce coverage threshold" step).

### Security Scanning
`codeql.yml` runs CodeQL analysis on pushes, pull requests, and weekly via cron to identify potential security vulnerabilities.

### Dependency Vulnerability Audit
`dependency-audit.yml` runs `npm audit --production --audit-level=high` on pushes, pull requests, and weekly. Adjust `--audit-level` to `moderate` or `critical` based on policy.

### Coverage Badge Generation
The CI workflow generates a `coverage-badge.svg` using the `badge-maker` package and uploads it as an artifact. For a persistent badge in the README that updates automatically, integrate a coverage service (Codecov, Coveralls) or publish the badge to a dedicated branch / gist and reference its raw URL.

## Extending
- Add additional library modules under `src/`.
- Introduce integration tests under `tests/` and optionally split workflows.
- Add code quality gates (coverage thresholds) in `ci.yml`.

## License
Demo code provided for internal evaluation purposes. Add a proper license if distributing externally.
