FROM node:16.19.0


WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install
EXPOSE 80

ENV HOST 0.0.0.0

ENV PORT 80

ENV NODE_ENV production
RUN npm run build
CMD [ "npm", "run", "start" ]
