FROM node:16

WORKDIR /root/backend

COPY package.json .
COPY server.js .

RUN npm i
CMD npm run start
