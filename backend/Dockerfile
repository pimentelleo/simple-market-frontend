FROM node:latest 
RUN npm install -g @adonisjs/cli
COPY package.json ./
RUN npm install
COPY . /home/app

CMD [ "npm", "start" ]