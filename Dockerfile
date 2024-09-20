# Use uma imagem base do Node.js
FROM node:18 AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código da aplicação
COPY . .

# Execute o build da aplicação
RUN npm run build

# Use uma imagem do Nginx para servir a aplicação
FROM nginx:alpine

# Copie os arquivos da build para o Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
