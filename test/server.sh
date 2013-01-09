#!/bin/bash

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"
JSTD_VERSION=1.3.4.b

COMMAND=$1

command -v phantomjs >/dev/null 2>&1 || { echo "Can't find phantomjs, please make sure it's on your PATH." >&2; exit 1; }

if [ ! -f "$ROOTDIR/JsTestDriver-$JSTD_VERSION.jar" ]; then
    echo "Downloading JsTestDriver jar ..."
    curl http://js-test-driver.googlecode.com/files/JsTestDriver-$JSTD_VERSION.jar > $ROOTDIR/JsTestDriver-$JSTD_VERSION.jar
fi

if [ ! -f "$ROOTDIR/coverage-$JSTD_VERSION.jar" ]; then
    echo "Downloading coverage jar ..."
    curl http://js-test-driver.googlecode.com/files/coverage-$JSTD_VERSION.jar > $ROOTDIR/coverage-$JSTD_VERSION.jar
fi
