#!/usr/bin/env bash

docker build -t registry.gitlab.com/llibreria-domingo/llibreria-domingo-nextjs/nextjs:latest -f Dockerfile .
docker push registry.gitlab.com/llibreria-domingo/llibreria-domingo-nextjs/nextjs:latest
