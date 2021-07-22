FROM node:14.16-alpine

ENV NODE_ENV=production
WORKDIR "/app"

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]