FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

# pnpm ve Angular CLI'yi global olarak yükle
RUN npm install -g pnpm @angular/cli

# Bağımlılık dosyalarını kopyala
COPY package.json pnpm-lock.yaml ./

# Bağımlılıkları yükle
RUN pnpm install

# Angular uygulamasını başlat
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

