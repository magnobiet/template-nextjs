#!/usr/bin/env bash

set -o pipefail
set +e

LOG_FILE="/tmp/e2e-test.log"

pnpm test:e2e 2>&1 | tee "$LOG_FILE"

EXIT_CODE=${PIPESTATUS[0]}
STATUS=$([ $EXIT_CODE -eq 0 ] && echo '✅ Passed' || echo '❌ Failed')

START_LINE=$(grep -nE '^Running [0-9][0-9]* tests using [0-9][0-9]* workers' "$LOG_FILE" | head -n 1 | cut -d: -f1)

if [ -n "$START_LINE" ]; then
  LOG_CMD=(tail -n +"$START_LINE" "$LOG_FILE")
else
  LOG_CMD=(cat "$LOG_FILE")
fi

{
  echo "## End-to-End Tests — $STATUS"
  echo '```'
  "${LOG_CMD[@]}"
  echo '```'
} >> "$GITHUB_STEP_SUMMARY"

exit "$EXIT_CODE"
