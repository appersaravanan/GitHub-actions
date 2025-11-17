## TeamCity Setup Guide

This guide explains how to connect this repository to TeamCity and use the Kotlin DSL in `.teamcity` for versioned settings.

### 1. Create Project
1. In TeamCity, create a new project from the repository URL.
2. Enable "Versioned Settings" and choose "Kotlin DSL" with the default `.teamcity` directory.

### 2. Node Environment
- Use the TeamCity Node.js build feature/plugin if available.
- Alternatively install Node 20 manually on agents (nvm/asdf or pre-baked image).
- Ensure `npm` is available in the agent PATH.

### 3. Build Steps Overview
The DSL defines steps: version check, `npm ci`, lint, build, test with coverage.

### 4. Artifacts
Artifact rules in `settings.kts` publish:
- Coverage directory: `coverage/`
- JUnit XML report: `reports/junit.xml`

You can browse artifacts after each build and integrate coverage with external tooling.

### 5. Test Reporting
JUnit build feature is enabled to parse `reports/junit.xml` for test statistics.

### 6. Modifying Configuration
Edit `.teamcity/settings.kts` and push changes. TeamCity will detect and apply them on subsequent builds.

### 7. Credentials & Secrets
Add any required secrets (e.g., for publishing) via TeamCity UI (Project Settings > Parameters) and reference them as `%secret.PARAM_NAME%` in steps.

### 8. Trigger Behavior
The VCS trigger runs the CI build on any repository change, similar to GitHub Actions `push`.

### 9. Comparing to GitHub Actions
| Aspect | TeamCity | GitHub Actions |
|--------|----------|----------------|
| Configuration | Kotlin DSL in repo | YAML workflows |
| Parallel Matrix | Requires multiple build types or parallel agents | Native matrix strategy |
| Caching npm | Node build feature or explicit scripts | `actions/setup-node` with built-in cache |
| Artifacts | Artifact rules in DSL | `actions/upload-artifact` |
| Test Reporting | JUnit feature | JUnit XML + summary step |
| Secrets | Parameters UI | Encrypted secrets UI |
| Reusable Logic | DSL classes/templates | Reusable workflows (`workflow_call`) |

### 10. Troubleshooting
- Check agent compatibility if Node is missing.
- Ensure `reports/junit.xml` is generated; verify Vitest config.
- Validate Kotlin DSL version matches server version.

### 11. Next Steps
Add additional build types for release packaging to mimic the GitHub Release workflow.
