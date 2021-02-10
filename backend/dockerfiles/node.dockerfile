FROM node:latest

COPY / /var/www/api
WORKDIR /var/www/api
RUN yarn
ENTRYPOINT [ "yarn", "dev" ]
EXPOSE 3333
