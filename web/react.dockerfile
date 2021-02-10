FROM node:latest

COPY / /var/www/app
WORKDIR /var/www/app
RUN yarn
ENTRYPOINT [ "yarn", "start" ]
EXPOSE 3000
