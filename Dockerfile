FROM node:12.18.3-alpine as base
EXPOSE 8080
USER root
WORKDIR /app

FROM base AS dependencies
RUN npm install && npm cache clean --force --loglevel=error


FROM base as server
RUN npm install -g nodemon

ENTRYPOINT ["npm", "run", "start"]
