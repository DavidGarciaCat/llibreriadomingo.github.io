#!/usr/bin/env bash

DOCKER_CONTAINER_NAME=llibreria-domingo
DOCKER_IMAGE="registry.gitlab.com/llibreria-domingo/llibreria-domingo-nextjs/nextjs:latest"

docker pull ${DOCKER_IMAGE}

if [ 1 -eq `docker ps | grep ${DOCKER_CONTAINER_NAME} | wc -l` ]
then
	docker stop --time=300 ${DOCKER_CONTAINER_NAME}
	docker rm ${DOCKER_CONTAINER_NAME}
fi

docker run -d \
    --name "${DOCKER_CONTAINER_NAME}" \
    --restart=unless-stopped \
    -p 8201:8201 \
    ${DOCKER_IMAGE}

docker system prune -af
docker volume prune -f

#docker logs -f ${DOCKER_CONTAINER_NAME}
