# GitHub Actions CI Details

This document now focuses solely on the GitHub Actions implementation used in this demo repository.

## Workflow Summary
`ci.yml` executes a matrix across Node versions (18.x, 20.x, 22.x) and operating systems (Ubuntu and experimental macOS). Each job performs:
1. Checkout code.
2. Node setup with npm cache.
3. Install dependencies (`npm ci`).
4. Lint and build.
5. Run tests with coverage & JUnit output.
6. Upload artifacts (coverage directory + JUnit XML).
7. Append coverage percentage and test count to the job summary.

`reusable-test.yml` demonstrates workflow reuse via `workflow_call` for a specific Node/OS pairing without duplicating steps.

`release.yml` creates versioned releases when pushing tags matching `v*` by packaging the `dist` output.

## Key Features
| Feature | Implementation |
|---------|---------------|
| Matrix Strategy | Node & OS dimensions for broad compatibility |
| npm Caching | `actions/setup-node@v4` built-in cache |
| Artifacts | `actions/upload-artifact` (coverage + JUnit) |
| Test Reporting | Vitest JUnit XML + coverage summary step |
| Reusable Logic | Separate workflow consumed via `workflow_call` |
| Release Packaging | Tag-triggered workflow bundles `dist` as zip |

## Coverage Summary Logic
Job summary uses a small Node one-liner reading `coverage/coverage-summary.json` and counting `<testcase>` entries inside `reports/junit.xml`.

## Extending
| Goal | Approach |
|------|----------|
| Enforce coverage thresholds | Add `vitest --coverage` with threshold config or a custom step failing below % |
| Add integration tests | Create `tests/integration/*.test.ts` and potentially split workflow jobs |
| Security scanning | Add steps using `npm audit` or third-party actions (e.g. CodeQL) |
| Build artifacts | Upload compiled bundles, SBOM, or Docker images |

## Troubleshooting
- Missing coverage: ensure `vitest.config.ts` includes coverage reporters and `npm run test:coverage` used.
- Artifact size limits: prune unnecessary files before upload.
- macOS failures: allowed via `continue-on-error` for experimental support.

## Screenshots (Placeholders)
1. `images/github-actions-run.png` – Replace with an actual workflow run screenshot.
2. `images/github-actions-coverage.png` – Replace with coverage summary screenshot.

