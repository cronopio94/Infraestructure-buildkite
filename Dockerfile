FROM node:latest

MAINTAINER Mich
  
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

RUN npm install

EXPOSE $PORT

ENTRYPOINT  ["npm", "start"]
