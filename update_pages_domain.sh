#!/bin/bash

# Load the .env file
source .env

# Variables
REPO="Portfolio"
DOMAIN="romiltiwari.com"

# GitHub API URL for Pages
API_URL="https://api.github.com/repos/$GITHUB_USERNAME/$REPO/pages"

# JSON Payload
JSON_DATA=$(cat <<EOF
{
  "cname": "$DOMAIN",
  "https_enforced": true
}
EOF
)

# Call GitHub API to update Pages configuration
curl -X PATCH \
     -H "Authorization: token $REACT_APP_GITHUB_TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     -d "$JSON_DATA" \
     $API_URL
