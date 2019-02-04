#!/usr/bin/env bash

start_server() {
    npm install
    npm start
}

is_db_online() {
    return 0
}

WAIT_MSG="Waiting for DB.."
while ! is_db_online; do
    [ -z "${WAIT_MSG}" ] && echo -n .
    [ ! -z "${WAIT_MSG}" ] && echo "${WAIT_MSG}" && WAIT_MSG=""
    sleep 5
done

start_server