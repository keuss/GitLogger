#!/bin/sh

user=${1}

echo "Starting with ${user} ..."

node git-logger.js "${user}"