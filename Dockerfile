FROM node:carbon AS base

WORKDIR /appmobile/api

FROM base AS dependency

COPY package*.json yarn.lock ./

RUN yarn --pure-lockfile

FROM dependency AS build

WORKDIR /appmobile/api

COPY . /appmobile/api

RUN rm -rf .env

RUN yarn build

FROM mhart/alpine-node

WORKDIR /appmobile/api

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY --from=dependency /appmobile/api/package.json ./

RUN yarn install --production=true

COPY --from=build /appmobile/api/dist ./dist
COPY --from=build /appmobile/api/exports ./exports
RUN mkdir ./cache
RUN mkdir ./cache/files

EXPOSE 3000

CMD ["node", "./dist/server.js"]
