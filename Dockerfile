FROM node:lts-slim

WORKDIR /opt/project
COPY . .

RUN npm ci
RUN npm run build

EXPOSE 8201
ENTRYPOINT ["npm", "run", "start"]
