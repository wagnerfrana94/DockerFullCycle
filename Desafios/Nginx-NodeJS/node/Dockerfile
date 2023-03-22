FROM node:16.13.1

WORKDIR /app

COPY . .
RUN ls
RUN npm install

RUN ls

EXPOSE 8000

CMD [ "node", "index.js" ]
