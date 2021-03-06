FROM node:12

COPY . /app

WORKDIR /app

RUN yarn install --frozen-lockfile --non-interactive

RUN mkdir -p /app/dist

