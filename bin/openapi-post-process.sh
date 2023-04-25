#!/usr/bin/env bash

set -o errexit
# shellcheck disable=SC3040
set -o pipefail
set -o nounset
# set -o xtrace

add_ts_nocheck_comment() (
  TARGET="${1}"

  SED_COMMAND='1s;^;// @ts-nocheck\n;'
  if [ "$(uname)" != "Darwin" ]; then
    sed -i "$SED_COMMAND" $TARGET
  else
    sed -i '' "$SED_COMMAND" $TARGET
  fi
)

add_ts_nocheck_comment "${1}"
yarn eslint --fix "${1}"
