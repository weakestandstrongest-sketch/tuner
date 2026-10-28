#!/bin/sh
# Stamp a new release version into every cache-busting reference and version.json.
# Run before each commit that changes the app: sh tools/bump-version.sh
set -e
cd "$(dirname "$0")/.."
V=$(date -u +%Y%m%d%H%M%S)
sed -i "s/const APP_VERSION = '[0-9]*';/const APP_VERSION = '$V';/" index.html
sed -i -E "s/\?v=[0-9]+\"/?v=$V\"/g" index.html chords/index.html just/index.html
printf '{"v":"%s"}\n' "$V" > version.json
echo "version $V"
