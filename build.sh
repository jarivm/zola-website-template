#!/usr/bin/bash

set -o errexit
set -o nounset 
set -o pipefail

# Copy fontawesome fonts to static.
cp -r ./node_modules/@fortawesome/fontawesome-free/webfonts ./static

zola build
