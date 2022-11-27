FROM node:latest
RUN mkdir /service/
COPY . /service/
WORKDIR /service/
RUN npm install
CMD [ "node", "index.js" ]
EXPOSE 3000