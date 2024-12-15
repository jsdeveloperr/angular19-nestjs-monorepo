# **NestJS Backend Projesi Kullanım Kılavuzu**

Bu belge, `nest-backend` projesinin kurulumunu, çalıştırılmasını ve test edilmesini detaylı bir şekilde anlatır.

---

## 🚀 **Proje Kurulumu**

### **1. Bağımlılıkların Yüklenmesi**

Proje dizinine geçin ve gerekli bağımlılıkları yükleyin:

```bash
pnpm install
```

---

## 🛠️ **Projenin Çalıştırılması**

### **1. Geliştirme Ortamında Çalıştırma**

Aşağıdaki komut, geliştirme modunda uygulamayı başlatır ve kod değişikliklerini otomatik olarak takip eder:

```bash
pnpm start:dev
```

Uygulamaya erişim adresi:  
[http://localhost:3000](http://localhost:3000)

---

### **2. Üretim Ortamında Çalıştırma**

Öncelikle uygulamayı build edin:

```bash
pnpm build
```

Ardından, `dist` klasöründeki dosyaları çalıştırın:

```bash
pnpm start:prod
```

---

### **3. Debug Modunda Çalıştırma**

Geliştirirken hata ayıklama (debug) modunu etkinleştirmek için:

```bash
pnpm start:debug
```

---

## 🧪 **Test Çalıştırma**

### **1. Unit Testleri Çalıştırma**

Projedeki unit testleri çalıştırmak için:

```bash
pnpm test
```

### **2. Testleri İzleme Modunda Çalıştırma**

Kod değişiklikleriyle testlerin otomatik olarak çalışmasını sağlamak için:

```bash
pnpm test:watch
```

### **3. Kod Kapsama Raporu Oluşturma**

Kod kapsama raporunu oluşturmak için:

```bash
pnpm test:cov
```

Raporu **coverage/** klasöründen inceleyebilirsiniz.

---

## 🧹 **Kod Kalitesi Kontrolü**

### **1. Lint Kontrolü**

Kodun temiz ve standartlara uygun olduğundan emin olun:

```bash
pnpm lint
```

### **2. Kod Formatlama**

Prettier ile kodları otomatik formatlamak için:

```bash
pnpm format
```

---

## 📦 **Proje Yapısı**

Proje klasör yapısı şu şekildedir:

```plaintext
nest-backend/
├── src/                     # Uygulama kaynak kodları
│   ├── main.ts              # Uygulamanın giriş noktası
│   ├── app.module.ts        # Ana modül dosyası
│   ├── app.controller.ts    # Ana controller
│   ├── app.service.ts       # Ana servis
│   ├── modules/             # Modül bazlı yapılar
│   └── entities/            # Veritabanı entity dosyaları
├── test/                    # Test dosyaları
├── dist/                    # Build edilmiş dosyalar
├── package.json             # Proje bağımlılıkları ve script'leri
└── tsconfig.json            # TypeScript konfigürasyonu
```

---

## 📊 **Swagger API Dokümantasyonu**

Proje, API uç noktalarını dökümante etmek için **Swagger** kullanmaktadır.

Uygulamayı çalıştırdıktan sonra Swagger arayüzüne şu adresten erişebilirsiniz:  
[http://localhost:3000/api](http://localhost:3000/api)

---

## 🔗 **Önemli Bağımlılıklar**

### **Ana Bağımlılıklar**
- **@nestjs/core:** NestJS çekirdek modülü.
- **@nestjs/jwt:** JWT kimlik doğrulama desteği.
- **@nestjs/typeorm:** TypeORM ile veritabanı entegrasyonu.
- **bcrypt:** Şifreleme işlemleri için kullanılır.
- **swagger-ui-express:** Swagger API dökümantasyonu için UI.

### **Geliştirme Bağımlılıkları**
- **eslint:** Kod kalitesi kontrolü.
- **prettier:** Kod formatlama.
- **jest:** Test framework'ü.
- **ts-jest:** TypeScript destekli testler.
- **typescript:** TypeScript desteği.

---

## 🚦 **Sorun Giderme**

### **1. Bağımlılık Hataları**

Eğer bağımlılık hataları alırsanız:

```bash
pnpm install
```

### **2. Port Çakışması**

Eğer `3000` portu başka bir servis tarafından kullanılıyorsa, `.env` dosyasında `PORT` değişkenini güncelleyin:

```plaintext
PORT=4000
```

Ve ardından projeyi yeniden başlatın.

---

## 🎯 **Yararlı Komutlar**

| Komut             | Açıklama                                   |
|--------------------|--------------------------------------------|
| `pnpm start`       | Uygulamayı başlatır.                     |
| `pnpm start:dev`   | Geliştirme modunda çalıştırır.           |
| `pnpm build`       | Projeyi build eder.                     |
| `pnpm lint`        | Kod kalitesi kontrolü yapar.            |
| `pnpm format`      | Kodu otomatik olarak formatlar.          |
| `pnpm test`        | Unit testleri çalıştırır.                |
| `pnpm test:watch`  | Testleri izleme modunda çalıştırır.       |
| `pnpm test:cov`    | Kod kapsama raporu oluşturur.            |

---

## 🌐 **Projenin Erişim Adresi**

- **Swagger API Dokümantasyonu:** [http://localhost:3000/api](http://localhost:3000/api)  

---

## 🎯 **İletişim!**

Eğer sorun yaşarsanız ya da bir hata ile karşılaşırsanız, lütfen geri bildirimde bulunun!

## 🎉 **İyi Çalışmalar!**