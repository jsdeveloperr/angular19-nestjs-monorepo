#!/bin/bash

# Script dosyasına yürütme izni verilmiş mi kontrol et
if [ ! -x "$0" ]; then
  echo "Yürütme izni eksik, gerekli izinler veriliyor..."
  chmod +x "$0" || { echo "İzin verilemedi. Lütfen manuel olarak 'chmod +x $0' çalıştırın."; exit 1; }
fi

# Docker Compose başlat
docker-compose up --build &

# Konteynerlerin başlatılması için bekle
echo "Servislerin başlaması için bekleniyor..."
sleep 10

# URL'leri aç
echo "URL'ler açılıyor..."
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  xdg-open "http://localhost:4200/login" &
  xdg-open "http://localhost:3000/api" &
elif [[ "$OSTYPE" == "darwin"* ]]; then
  open "http://localhost:4200/login" &
  open "http://localhost:3000/api" &
elif [[ "$OSTYPE" == "cygwin" || "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  start "http://localhost:4200/login"
  start "http://localhost:3000/api"
else
  echo "Desteklenmeyen işletim sistemi. URL'leri manuel olarak açın:"
  echo "http://localhost:4200/login"
  echo "http://localhost:3000/api"
fi
