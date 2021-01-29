FROM node:14.2.0-alpine3.11 AS builder
WORKDIR /app
RUN npm install -g @angular/cli
COPY ./package.json .
RUN npm i
COPY . .
RUN ng build --prod

FROM nginx as runtime
COPY --from=builder /DockerPetshop/dist/DockerPetshop/ /usr/share/nginx/html
