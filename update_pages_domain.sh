#!/bin/bash

# Load the .env file
source .env

# Variables
USERNAME="Romil-Tiwari1"
REPO="Portfolio"
DOMAIN="romiltiwari.com"
TOKEN="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"

# GitHub API URL for Pages
API_URL="https://api.github.com/repos/$USERNAME/$REPO/pages"

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
     -H "Authorization: token $TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     -d "$JSON_DATA" \
     $API_URL
