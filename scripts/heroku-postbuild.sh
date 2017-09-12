#!/usr/bin/env bash

# Runs postbuild script for workspace based on heroku environment variable.

if [ -z "$WORKSPACE" ]; then
  echo "No workspace specified."
  exit 1
fi

if ! grep -q "heroku-postbuild" "$WORKSPACE/package.json"; then
  echo "$WORKSPACE does not define a heroku-postbuild script."
  exit 0
fi

cd "$WORKSPACE"
yarn heroku-postbuild
