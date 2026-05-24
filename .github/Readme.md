## 🛠️ Repository Configuration & Workflow Guide

This project utilizes automated GitHub configurations to manage issues, pull requests, code ownership, and continuous integration. All configurations are located inside the hidden `.github/` directory.

### 📁 Directory Layout
```text
Root (Main)
└── .github/
    ├── CODEOWNERS
    ├── pull_request_template.md
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   └── feature_request.md
    └── workflows/
        └── ci-validation.yml
```

---

### 📋 Issue Templates
*   **Location:** `.github/ISSUE_TEMPLATE/`
*   **Usage:** When creating a new issue on GitHub, you will be prompted with a choice menu to select either a **Bug Report** or a **Feature Request**. This standardises our tracking and resolution pipeline.

### 🚀 Pull Request Template
*   **Location:** `.github/pull_request_template.md`
*   **Usage:** You do not need to copy-paste or use custom URL parameters. GitHub automatically fetches this file and pre-populates the description field every time you open a new Pull Request. Please fill out the overview, check the appropriate change type, and link related issues.

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
