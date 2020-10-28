# Dockerfile

# base image
FROM node:12

# define environment variables
ARG REPOSITORY_URI
ARG NODE_ENV

# working directory
WORKDIR .

# copy source files
COPY . .

# install dependencies
RUN npm install

ENV NODE_ENV=production
ENV PORT=3000

# build app
RUN npm run build
EXPOSE 3000

# start app
CMD npm run start
