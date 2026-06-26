## 🛠️ Repository Configuration & Workflow Guide
This project utilizes automated GitHub configurations to manage issues, pull requests, code ownership, and continuous integration. All configurations are located inside the hidden `.github/` directory.
### 📁 Directory Layout
```text
Root (Main)
├── .devcontainer/
│   └── devcontainer.json
└── .github/
    ├── CODEOWNERS
    ├── CONTRIBUTING.md
    ├── pull_request_template.md        <-- Default Single PR Template
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   └── feature_request.md
    ├── PULL_REQUEST_TEMPLATE/         <-- Specialized Multi-Templates Folder
    │   ├── security_hotfix.md
    │   └── major_release.md
    └── workflows/
        └── ci-validation.yml
```

---
### 📋 Issue Templates
*   **Location:** `.github/ISSUE_TEMPLATE/`
*   **Usage:** When creating a new issue on GitHub, you will be prompted with a choice menu to select either a **Bug Report** or a **Feature Request**. This standardises our tracking and resolution pipeline.

### 🚀 Hybrid Pull Request Templates
*   **Default Single Template (`.github/pull_request_template.md`):** This is our standard catch-all template. GitHub automatically fetches this file and pre-populates the description field for every standard Pull Request. No action is required from you.
*   **Specialized Multi-Templates (`.github/PULL_REQUEST_TEMPLATE/`):** For specific, non-standard contributions, we provide specialized alternative layouts. You can manually force GitHub to load these variants by appending `?template=file_name.md` to your repository's new PR creation web address:
    *   `security_hotfix.md`: Tailored specifically for urgent vulnerability remediation patching.
    *   `major_release.md`: Structured for bundling multiple sub-features during production version deployments.

### 🚴‍♂️ Code Owners (`CODEOWNERS`)
*   **Location:** `.github/CODEOWNERS`
*   **Usage:** Reviewers are automatically assigned to your Pull Requests based on the files you modify:
    *   **Global Changes:** Assigned to the primary maintainers.
    *   **Documentation (`/docs/`):** Automatically loops in the technical writing team.
    *   **UI Components (`/src/components/ui/`):** Automatically routes to the Design System leads.
    *   **Configuration (`*.yml`, `package.json`):** Automatically assigns DevOps and Frontend architects.

### ⚙️ CI Automation (GitHub Actions)
*   **Location:** `.github/workflows/ci-validation.yml`
*   **Usage:** Every time a Pull Request is opened or updated, an automated GitHub Actions runner triggers in the cloud. It automatically checks out your branch, installs dependencies, checks code formatting (linting), and runs the test suite. 
*   ⚠️ **Note:** Pull Requests cannot be merged if any automated validation step fails.

### 🤝 Contribution Guide (`CONTRIBUTING.md`)
*   **Location:** `.github/CONTRIBUTING.md`
*   **Usage:** Contains the official coding rules, branch naming policies, and commit standards for this repository. Please read this file before submitting any code changes to ensure your PR aligns with our architectural standards.

### 📦 Dev Container Workspace
*   **Location:** `.devcontainer/devcontainer.json`
*   **Usage:** Provides a fully configured, containerized development environment. Opening this project inside VS Code with the **Dev Containers** extension automatically installs the correct runtime versions, system packages, and editor tools required for development.

### 🎨 External Dotfiles Personalization
*   **Location:** Managed via an external personal repository (e.g., `username/dotfiles`).
*   **Usage:** Do not commit your personal shell profiles or aliases to this repository. Instead, configure your global VS Code / Dev Container settings to automatically clone and inject your personal dotfiles repository into the container container during initialization. This keeps your local terminal workspace personalized without cluttering the project code.
