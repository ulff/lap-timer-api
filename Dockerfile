FROM node:latest
RUN mkdir -p /usr/src/app
RUN npm install nodemon -g
ADD . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
EXPOSE 8080
ENV NODE_ENV="dev"
CMD [ "npm", "start" ]
