FROM node:lts-slim

WORKDIR /opt/project
COPY . .

RUN npm install
RUN npm run build

EXPOSE 8201
ENTRYPOINT ["npm", "run", "start"]
