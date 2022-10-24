#!/bin/bash

npm install
npm run build
npx prisma migration:run
npm run start:dev
