terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 6.0"
    }
  }
}

# Configure the GitHub Provider
provider "github" {
  # Leave empty to automatically use the Codespaces authentication token
}

# Reference your existing repository
data "github_repository" "repo" {
  full_name = "roshan-melvin/Foundation"
}

# Create the new branch
resource "github_repository_branch" "new_branch" {
  repository    = data.github_repository.repo.name
  branch        = "my-new-terraform-branch"
  source_branch = "main"
}
