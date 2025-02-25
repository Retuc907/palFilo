# Etapa 1: Build de Angular
FROM node:18-alpine AS build-step
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto de la app y ejecutar el build
COPY . .
RUN npm run build -- --configuration=production --project=palFiloApp

# Etapa 2: Servir con Nginx
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/pal-filo-app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
