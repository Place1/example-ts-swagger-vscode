#!/usr/bin/env bash

echo "installing dependencies..."
cd app
npm install
cd ..

echo "generating client-sdk and server-stub..."
./codegen.sh

echo "done 😊"
