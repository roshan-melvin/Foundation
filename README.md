# README TEMPLATE

## Status badge:
[![License: MIT](https://shields.io)](https://opensource.org)

## Image Adding:
<p align="center">
  <img src="https://githubusercontent.com" alt="Project Banner" width="400">
</p>

## Navigation
* [Local Reference Link](#execute-these-commands-in-your-codespaces-terminal-to-deploy-the-branchcode-space-creation)
* [External Link](https://google.com)

> [!NOTE]
> Ensure your cloud provider credentials are set up in your environment variables before running the initialization step below.

## Execute these commands in your Codespaces terminal to deploy the branch(Code Space Creation):

### Required Parameters(Table Creation):

| Flag | Type | Description |
| :--- | :--- | :--- |
| `-auto-approve` | Boolean | Skips interactive approval of the plan |

### Initialize the working directory:
```bash
terraform init
```

### Preview the actions:
```bash
terraform plan
```

### Create the branch:
```bash
terraform apply -auto-approve
```

> [!WARNING]
> Running `apply -auto-approve` will immediately provision live infrastructure and may incur financial costs.

### Project Status Checklist:
- [x] Backend state configured
- [ ] Resources provisioned
- [ ] Post-deployment tests passing

### Math Notation Examples:
* Subscript (HTML): x<sub>2</sub>
* SuperScript (HTML): x<sup>2</sup>

### Details Drop-Down:
<details>
  <summary>Click to view raw execution logs</summary>
  
  ```json
  {
    "status": "success",
    "resources_created": 12
  }
  ```
</details>
