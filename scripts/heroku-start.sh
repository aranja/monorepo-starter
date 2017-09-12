#!/usr/bin/env bash

# Run heroku-start script for workspace based on heroku environment variable.

if [ -z "$WORKSPACE" ]; then
  echo "No workspace specified."
  exit 1
fi

if ! grep -q "heroku-start" "$WORKSPACE/package.json"; then
  echo "$WORKSPACE does not define a heroku-start step."
  exit 1
fi

cd "$WORKSPACE"
yarn heroku-start
