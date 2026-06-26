# Copilot Instructions

## Project Overview
This is the Foundation repository—an educational demo project showcasing deployment automation and dependency management with Terraform and npm.

## Key Files and Directories
- `package.json` – NPM configuration (no production dependencies)
- `Terraform/` – Infrastructure-as-code definitions
- `.github/workflows/` – CI/CD pipelines
- `.github/dependabot.yml` – Automated dependency updates

## Development Guidelines
1. **Dependency Updates**: Dependabot will create PRs weekly for npm, Terraform, and GitHub Actions updates.
2. **Testing**: Run `npm test` to validate demo test suite.
3. **Linting**: Run `npm run lint` to validate demo linter check.
4. **Terraform**: Use `terraform plan` before `terraform apply` to preview infrastructure changes.

## Code Style
- Use 2-space indentation in configuration files (YAML, JSON).
- Avoid tabs in YAML files.
- Keep commit messages clear and concise.

## Branching Strategy
- Work on feature branches (e.g., `pr-test`).
- Squash and merge into `main` when ready.
- Include Dependabot updates in regular PRs where possible.

## Security Notes
- Never commit credentials or API keys.
- Use environment variables for sensitive configuration.
- Review Dependabot PRs for breaking changes before merging.
