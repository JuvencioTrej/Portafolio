# Usa una imagen base de Node.js
FROM node:alpine AS build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia el archivo de configuración personalizado de Nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de la aplicación compilada desde la etapa de construcción
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80 para que la aplicación sea accesible desde el exterior
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
