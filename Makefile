# Proje Adları
ANGULAR_DIR=packages/angular-frontend
NEST_DIR=packages/nest-backend

# Komutlar
.PHONY: install start-angular start-nest start-all build-angular build-nest build-all clean

# Bağımlılıkları yükle
install:
	@echo "Installing dependencies for all projects..."
	cd $(ANGULAR_DIR) && pnpm install
	cd $(NEST_DIR) && pnpm install

# Angular uygulamasını başlat
start-angular:
	@echo "Starting Angular frontend..."
	cd $(ANGULAR_DIR) && pnpm start

# NestJS uygulamasını başlat
start-nest:
	@echo "Starting Nest backend..."
	cd $(NEST_DIR) && pnpm start:dev

# Her iki projeyi aynı anda başlat
start-all:
	@echo "Starting all projects..."
	make -j2 start-angular start-nest

# Angular için build işlemi
build-angular:
	@echo "Building Angular frontend..."
	cd $(ANGULAR_DIR) && pnpm build

# NestJS için build işlemi
build-nest:
	@echo "Building Nest backend..."
	cd $(NEST_DIR) && pnpm build

# Her iki projeyi build et
build-all:
	@echo "Building all projects..."
	make -j2 build-angular build-nest

# Temizlik (örn. dist klasörlerini silme)
clean:
	@echo "Cleaning all build outputs and node_modules..."
	rm -rf $(ANGULAR_DIR)/.angular
	rm -rf $(ANGULAR_DIR)/node_modules
	rm -rf $(NEST_DIR)/dist
	rm -rf $(NEST_DIR)/node_modules
	rm -rf node_modules

# Clean Yarn cache
cache-clean:
	@echo "Cleaning Yarn cache globally..."
	pnpm cache clean
