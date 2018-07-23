FROM node:8

# app directory
WORKDIR usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8050

CMD ["npm", "run", "start"]