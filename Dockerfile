FROM node:latest 
WORKDIR /home/app
COPY package.json ./
RUN npm install
COPY . /home/app

CMD [ "npm", "start" ]