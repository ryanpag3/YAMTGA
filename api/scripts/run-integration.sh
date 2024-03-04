#!/usr/bin/env bash

DIR="$(cd "$(dirname "$0")" && pwd)"
source $DIR/setenv.sh

cd ..

docker-compose up -d
echo '🟡 - Waiting for database to be ready...'
$DIR/wait-for-it.sh "${DATABASE_WAIT_FOR_IT_URL}" -- echo '🟢 - Database is ready!'

yarn prisma:migrate:integration-test

if [ "$#" -eq "0" ]
    then
        npx vitest -c ./vitest.config.integration.ts
    else
        npx vitest -c ./vitest.config.integration.ts --ui
fi