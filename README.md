# Angular19 && Nestjs Monorepo

Bu proje **NestJS** (Backend) ve **Angular** (Frontend) uygulamalarını içeren bir **monorepo** yapısında geliştirilmiştir. Projeyi başlatmak için gerekli araçların kurulumunu yapmanız ve talimatları takip etmeniz yeterlidir.

---

## 🚀 **Projenin Ön Koşulları**

Projeyi çalıştırmadan önce aşağıdaki araçların sisteminizde kurulu olduğundan emin olun:

1. **Docker** (Zorunlu)
   - Docker'ın kurulu olmadığını düşünüyorsanız [Docker İndirme Linki](https://www.docker.com/products/docker-desktop) üzerinden yükleyebilirsiniz.
   - Docker ve Docker Compose çalışır durumda olmalıdır.

2. **pnpm** (Node.js için hızlı ve verimli paket yöneticisi)
   - pnpm yüklemek için aşağıdaki komutu kullanabilirsiniz:

   ```bash
   npm install -g pnpm
   ```

3. **Node.js** (v18+)
   - Node.js kurulu değilse [Node.js İndirme Sayfası](https://nodejs.org/) üzerinden yükleyebilirsiniz.

---

## 🚀 **Projenin Klonlanması**

Proje dosyalarını bilgisayarınıza indirmek için `git clone` komutunu kullanabilirsiniz:

### **1. Git ile Projeyi Klonlama**

Aşağıdaki komutu terminalde çalıştırarak projeyi klonlayın:

```bash
git clone https://github.com/jsdeveloperr/forceget-monorepo-assignment.git
```

### **2. Proje Klasörüne Geçiş**

Proje dosyalarını indirdikten sonra proje klasörüne geçin:

```bash
cd forceget-monorepo-assignment
```

---


## 📦 **Projenin Kurulumu**

Proje klasörünü klonladıktan sonra aşağıdaki adımları izleyin:

### 1. **Bağımlılıkların Kurulumu**
Tüm bağımlılıkları yüklemek için:

```bash
pnpm install:all
```

---

## 🛠️ **Projeyi Çalıştırma**

### 1. **Docker ile Tüm Projeyi Başlatma**
Docker kullanarak backend (NestJS) ve frontend (Angular) servislerini aynı anda çalıştırabilirsiniz.

```bash
pnpm start:docker
```

### ⚠️ **Hata Durumu İçin Alternatif:**
Eğer `pnpm start:docker` çalışmazsa manuel olarak aşağıdaki komutla Docker servislerini başlatabilirsiniz:

```bash
pnpm docker:run
```

---

## 🌐 **Projenin Erişim Adresleri**

Docker servisleri başarılı şekilde çalıştığında aşağıdaki adreslere tarayıcıdan erişebilirsiniz:

1. **Angular Frontend (Web Arayüzü):**
   - [http://localhost:4200/login](http://localhost:4200/login)

2. **NestJS Backend (API):**
   - [http://localhost:3000/api](http://localhost:3000/api)

---

## 🌐 **Proje URL’leri ve Kullanımı**

Başarılı bir kurulumdan sonra aşağıdaki URL’leri kullanabilirsiniz:

1. **Kayıt Olma (Register):**
   - [http://localhost:4200/register](http://localhost:4200/register)
   - Buradan kullanıcı oluşturabilirsiniz.

2. **Giriş Yapma (Login):**
   - [http://localhost:4200/login](http://localhost:4200/login)
   - Kayıt olduğunuz kullanıcı bilgileriyle giriş yapın.

3. **Boyut Ekleme (Dimensions):**
   - **Önce şu URL’ye gidin:** [http://localhost:4200/dimensions/create](http://localhost:4200/dimensions/create)
   - Aşağıdaki boyutları tek tek ekleyin:
     | Adı      | Uzunluk | Genişlik | Yükseklik |
     |----------|---------|----------|-----------|
     | Carton   | 12      | 12       | 12        |
     | Box      | 24      | 16       | 12        |
     | Pallet   | 40      | 48       | 60        |

4. **Teklif Oluşturma (Create Offer):**
   - [http://localhost:4200/offers/create](http://localhost:4200/offers/create)
   - Burada `Calculate` butonu ile teklif hesaplaması yapabilir ve ardından `Save` butonu ile kaydedebilirsiniz.

---

## 🧭 **Navigasyon Menüsü**

Aşağıdaki menüler arayüzde sağlanmıştır:

1. **Offers:**
   - **Offer List:** Tüm teklifler listelenir.
   - **Create Offer:** Yeni bir teklif oluşturabilirsiniz.

2. **Package Types:**
   - **Package Type List:** Boyutların listesi.
   - **Create Package Type:** Yeni bir boyut oluşturabilirsiniz.

3. **Logout:** Sistemde çıkış yapmak için kullanılır.

---


## 🧹 **Proje Temizleme**

Proje dosyalarını ve Docker servislerini temizlemek için:

### 1. **Docker Servislerini Durdur ve Temizle**
Docker servislerini, oluşturulan imajları ve volume'leri temizlemek için:

```bash
pnpm clean:docker
```

### 2. **Proje Bağımlılıklarını ve Cache Temizleme**
```bash
pnpm clean
pnpm cache:clean
```

---

## 📜 **Manuel Proje Çalıştırma**

Eğer Docker kullanmadan projeyi manuel çalıştırmak isterseniz:

### 1. **NestJS Backend Çalıştırma**
```bash
pnpm start:nest
```

### 2. **Angular Frontend Çalıştırma**
```bash
pnpm start:angular
```

### 3. **Her İki Servisi Aynı Anda Başlatma**
```bash
pnpm start:all
```

---

## 🛑 **Önemli Notlar**
- Docker kurulu değilse proje çalışmaz. Lütfen Docker'ı yükleyin.
- Eğer **Linux** veya **MacOS** kullanıyorsanız, `chmod` komutunun script dosyasına izin verdiğinden emin olun:

   ```bash
   chmod +x start.sh
   ```

- Windows kullanıcıları için `start.bat` otomatik olarak çalışacaktır.

---

## 🚦 **Proje Yapısı**

Proje içerisinde aşağıdaki dizinler ve dosyalar yer almaktadır:

```plaintext
.
├── packages/
│   ├── angular-frontend/   # Angular uygulaması (Frontend)
│   └── nest-backend/       # NestJS uygulaması (Backend)
├── start.sh                # Docker servislerini başlatan script (Linux/MacOS)
├── start.bat               # Docker servislerini başlatan script (Windows)
├── docker-compose.yml      # Docker yapılandırması
├── Makefile                # Yardımcı komutlar
├── package.json            # Monorepo scriptleri
└── .gitignore              # Git tarafından takip edilmeyecek dosyalar
```

---

## 🚀 **Test Adımları Özet:**

1. **Kayıt Olun:** [http://localhost:4200/register](http://localhost:4200/register)
2. **Giriş Yapın:** [http://localhost:4200/login](http://localhost:4200/login)
3. **Boyutları Ekleyin:** [http://localhost:4200/dimensions/create](http://localhost:4200/dimensions/create)
4. **Teklif Oluşturun:** [http://localhost:4200/offers/create](http://localhost:4200/offers/create)

---

## 🎯 **İletişim!**

Eğer sorun yaşarsanız ya da bir hata ile karşılaşırsanız, lütfen geri bildirimde bulunun!

## 🎉 **İyi Çalışmalar!**