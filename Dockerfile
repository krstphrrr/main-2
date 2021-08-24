# original dockerfile: https://github.com/jawg/docker-mapnik3/blob/master/v3.1/Dockerfile
FROM node:alpine


# get node
RUN apk update && \
    apk add curl && \ 
    apk add vim 

# install dependencies 
WORKDIR /usr/src

# copying from local context into docker container directory
COPY ./ /usr/src

RUN npm install

# exposing port where the node app is listening
EXPOSE 4000

# run app
CMD ["npm", "start"]
