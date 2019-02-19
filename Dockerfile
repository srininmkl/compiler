
FROM docker.io/node
# FROM node:8.0.0

# Create app directory
RUN mkdir -p /home/app
WORKDIR /home/app

# Bundle app source
COPY ./server /home/app 
EXPOSE 5051
CMD cd /home/app/server
CMD npm run start 
 

#Notes
#go to client folder
#npm install
#npm run build  - this will create dis folder inside server
#go to server folder
#npm install
#npm start - default port is set ti 8089