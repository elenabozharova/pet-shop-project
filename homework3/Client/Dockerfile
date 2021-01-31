#FROM node:12.20.1-alpine3.10 as build-step
#WORKDIR /app
#COPY package.json ./
#RUN npm install
#COPY . .
#RUN npm run build

#FROM nginx:1.16.0-alpine as prod-stage
#COPY --from=build-step /app/dist/dockerangular /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/Client /usr/share/nginx/html

