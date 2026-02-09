# Deep Room AI

Modern yapay zeka destekli oda tasarım platformu.

## Teknolojiler

- **Next.js 16** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Stil yönetimi
- **OpenAI API** - AI entegrasyonu
- **Nodemailer** - E-posta gönderimi

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
npm start
```

## Ortam Değişkenleri

`.env.local` dosyası oluşturun:

```env
OPENAI_API_KEY=your_openai_api_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

## Proje Yapısı

```
src/
├── app/          # Next.js App Router
├── components/   # React bileşenleri
└── lib/          # Yardımcı fonksiyonlar
```

## Lisans

MIT
