FROM node:14 
WORKDIR /home/app
COPY package.json ./
RUN npm install
COPY . /home/app
RUN npm run build

CMD [ "npm", "start" ]