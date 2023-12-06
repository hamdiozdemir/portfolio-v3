FROM node:18-alpine as builder

WORKDIR /app


COPY . .

RUN npm install

CMD [ "npm", "run", "build"]