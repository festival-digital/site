# Dockerfile

# base image
FROM node:alpine

# define environment variables
ARG REPOSITORY_URI
ARG NODE_ENV

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

ENV NODE_ENV=production
ENV PORT=3000

# build app
RUN npm run build
EXPOSE 3000

# start app
CMD npm run start
