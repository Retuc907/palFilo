FROM node:18-alpine AS build-step
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/landing-page-angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf 