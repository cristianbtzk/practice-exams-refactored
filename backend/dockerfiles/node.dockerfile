FROM node:latest

COPY / /var/www
WORKDIR /var/www
RUN yarn
ENTRYPOINT [ "yarn", "dev" ]
EXPOSE 3333
