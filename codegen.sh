#!/usr/bin/env bash

SPEC=swagger-spec.yml
SERVER=server-stub
CLIENTSDK=client-sdk

rm -rf $SERVER
rm -rf $CLIENTSDK

# generate the server stub
swagger-codegen generate \
  -i $SPEC \
  -l nodejs-server \
  -o $SERVER

# generate the client SDK
swagger-codegen generate \
  -i $SPEC \
  -l typescript-fetch \
  -o $CLIENTSDK

# link sdk to app
pushd app
npm link ../$CLIENTSDK
popd
