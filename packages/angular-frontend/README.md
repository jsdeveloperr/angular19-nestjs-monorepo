# **Angular Frontend Projesi Kullanım Kılavuzu**

Bu belge, **Angular Frontend** projesinin kurulumunu, çalıştırılmasını ve geliştirme süreçlerini açıklamaktadır.

---

## 🚀 **Proje Kurulumu**

Proje dizinine geçin ve bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:

```bash
pnpm install
```

---

## 🛠️ **Projenin Çalıştırılması**

### **1. Geliştirme Ortamında Projeyi Başlatma**

Projenizi geliştirme modunda çalıştırmak için:

```bash
pnpm start
```

Geliştirme sunucusu çalıştığında uygulamaya şu adresten erişebilirsiniz:  
[http://localhost:4200](http://localhost:4200)

---

## 🏗️ **Projenin Derlenmesi (Build)**

Projenizi production için derlemek (build etmek) istiyorsanız:

```bash
pnpm build
```

Bu işlem sonucunda `dist/` klasörü içerisinde derlenmiş dosyalar oluşturulacaktır.

---

## 🔍 **Dosya İzleme (Watch Mode)**

Kod değişikliklerini otomatik olarak takip edip, projeyi yeniden derlemek için:

```bash
pnpm watch
```

---

## 🧪 **Testlerin Çalıştırılması**

### **1. Unit Testleri Çalıştırma**

Projedeki unit testleri çalıştırmak için:

```bash
pnpm test
```

---

## 📦 **Proje Yapısı**

Angular projesi standart bir klasör yapısına sahiptir:

```plaintext
angular-frontend/
├── src/                     # Uygulama kaynak kodları
│   ├── app/                 # Ana uygulama bileşenleri
│   ├── assets/              # Statik dosyalar (CSS, img vb.)
│   ├── environments/        # Ortam ayar dosyaları (dev, prod)
│   ├── index.html           # Ana HTML dosyası
│   ├── main.ts              # Angular giriş noktası
│   └── styles.css           # Genel stil dosyası
├── angular.json             # Angular yapılandırma dosyası
├── package.json             # Proje bağımlılıkları ve script'leri
└── tsconfig.json            # TypeScript yapılandırma dosyası
```

---

## 🔗 **Proje Bağımlılıkları**

### **Ana Bağımlılıklar**
- **@angular/core:** Angular'ın ana modülü.
- **@angular/router:** Routing (sayfa geçişleri) modülü.
- **ng-zorro-antd:** Ant Design UI bileşen kütüphanesi.
- **rxjs:** Reactive programming için RxJS kütüphanesi.

### **Geliştirme Bağımlılıkları**
- **@angular-devkit/build-angular:** Angular için build araçları.
- **@angular/compiler-cli:** Angular derleyicisi.
- **karma:** Test çalıştırıcısı.
- **typescript:** TypeScript desteği.

---

## 🌟 **Kullanıcı Arayüzü (UI)**

Bu proje, **Ant Design** (`ng-zorro-antd`) UI bileşen kütüphanesini kullanmaktadır. Projede hazır gelen bileşenler, sayfa yapıları ve formlar kolayca genişletilebilir.

Daha fazla bilgi için [Ant Design for Angular](https://ng.ant.design/) dokümantasyonunu inceleyebilirsiniz.

---

## 🚦 **Sorun Giderme**

### **Port Çakışması**

Eğer `4200` portu başka bir servis tarafından kullanılıyorsa, farklı bir portta uygulamayı çalıştırabilirsiniz:

```bash
pnpm start -- --port 4300
```

Bu komut uygulamayı `http://localhost:4300` adresinde başlatacaktır.

---

## 🎯 **Yararlı Komutlar**

| Komut            | Açıklama                                  |
|------------------|-------------------------------------------|
| `pnpm start`     | Geliştirme sunucusunu başlatır.          |
| `pnpm build`     | Production build oluşturur.              |
| `pnpm watch`     | Kod değişikliklerini takip eder.         |
| `pnpm test`      | Unit testleri çalıştırır.                |

---

## 🌐 **Projenin Erişim Adresi**

Proje çalıştığında **giriş sayfası** şu adreste yer alacaktır:  
[http://localhost:4200/login](http://localhost:4200/login)

---

## 🎯 **İletişim!**

Eğer sorun yaşarsanız ya da bir hata ile karşılaşırsanız, lütfen geri bildirimde bulunun!

## 🎉 **İyi Çalışmalar!**
