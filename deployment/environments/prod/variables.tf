variable "project_id" {
    type = string
    description = "ID of the Google Cloud project to deploy resources under"
    default = "publish-to-bcr-prod"
}

variable "region" {
    type = string
    description = "Google Cloud region to deploy resources to"
    default = "us-west1"
}

variable "github_app_id" {
    type = string
    description = "ID of the publish-to-bcr GitHub app"
    default = "196878"
}

variable "github_bot_app_id" {
    type = string
    description = "ID of the GitHub app that publishes pull requests to a BCR"
    default = "234555"
}

variable "bazel_central_registry" {
    type = string
    description = "Bazel central registry to publish to"
    default = "bazelbuild/bazel-central-registry"
}

variable "notifications_email" {
    type = string
    description = "Email address that will send notifications"
    default = "no-reply@aspect.dev"
}

variable "smtp_host" {
    type = string
    description = "SMTP host to use for sending emails"
    default = "in-v3.mailjet.com"
}

variable "smtp_port" {
    type = number
    description = "SMTP port to use for sending emails"
    default = 465
}