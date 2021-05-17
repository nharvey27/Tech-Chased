#!/bin/bash

echo What should the version be?
read VERSION

docker build -t nharvey278/techchased:$VERSION .
docker push  nharvey278/techchased:$VERSION

ssh root@159.65.182.0 "docker pull nharvey278/techchased:$VERSION && docker tag nharvey278/techchased:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"