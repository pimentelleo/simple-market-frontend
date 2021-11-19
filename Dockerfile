FROM node:latest 
COPY package.json ./
RUN npm install
COPY . /home/app

CMD [ "npm", "start" ]