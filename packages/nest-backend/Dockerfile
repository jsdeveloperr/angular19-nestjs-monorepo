FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

# pnpm ve NestJS CLI'yi global olarak yükle
RUN npm install -g pnpm @nestjs/cli

# Bağımlılık dosyalarını kopyala
COPY package.json pnpm-lock.yaml ./

# Bağımlılıkları yükle
RUN pnpm install

# NestJS uygulamasını başlat
CMD ["pnpm", "start:dev"]
