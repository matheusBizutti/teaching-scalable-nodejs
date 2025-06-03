FROM node:18-alpine

WORKDIR /app

# Instala bibliotecas necessárias para o Prisma funcionar em ambiente Alpine
RUN apk add --no-cache libc6-compat openssl

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

