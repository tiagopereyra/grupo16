FROM node:8.16.1-alpine
WORKDIR /app
ARG GITHASH
ENV GITHASH=$GIT_COMMIT
ARG DATE
ENV DATE = $DATE
COPY package*.json /app
RUN npm install
COPY ./app.js /app
CMD node app.js
EXPOSE 3000