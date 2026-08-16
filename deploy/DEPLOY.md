# deeproomai.com — Production Deploy

VPS: `89.252.179.99` (`server.uzmanumre.com`) · nginx 1.24.0 Ubuntu · pm2
Uygulama yolu: `/var/www/deep` · Port: `3023`

---

## 0. ÖNCE DNS (bu yapılmadan site açılmaz)

Şu an `deeproomai.com` → `185.106.208.2` (guzel.net.tr paylaşımlı hosting, "Yapım
Aşamasında" park sayfası). VPS bu değil.

guzel.net.tr DNS panelinde:

| İşlem | Host | Tür | Adres | Öncelik |
|-------|------|-----|-------|---------|
| **Değiştir** | `@` | A | `185.106.208.2` → **`89.252.179.99`** | — |
| **Ekle** | `mail` | A | `185.106.208.2` | — |
| **Değiştir** | `@` | MX | `deeproomai.com` → **`mail.deeproomai.com`** | 0 |
| Dokunma | `www` | CNAME | `deeproomai.com` | — |

**MX'e neden dokunuyoruz:** mevcut MX kaydı `deeproomai.com`'u gösteriyor, o da A
kaydına çözümleniyor. A kaydını VPS'e çevirirsen mail VPS'e gitmeye başlar ve
VPS'te mail sunucusu olmadığı için **e-postalar düşer**. `mail` A kaydı mail'i
hosting tarafında tutar.

Yayılmayı bekle (genelde 5–30 dk):

```bash
dig +short deeproomai.com A
```

`89.252.179.99` dönene kadar SSL adımına geçme — certbot doğrulaması patlar.

---

## 1. Boş port doğrula

```bash
ss -tlnp | grep -E ':30[0-9]{2}' | sort -t: -k2 -n
```

`3023` doluysa `ecosystem.config.cjs` ve nginx conf'taki portu birlikte değiştir.

---

## 2. Kodu çek ve kur

> Repo **private**. HTTPS ile klon çalışmaz (GitHub şifre auth'u kapattı);
> sunucuda kurulu SSH anahtarı kullanılıyor.

```bash
mkdir -p /var/www && cd /var/www
git clone git@github.com:metinemredonmez/deep-room-site.git deep
cd /var/www/deep
npm ci --legacy-peer-deps
```

> `--legacy-peer-deps` şart: `eslint@^8` ile `eslint-config-next@16` (eslint>=9
> ister) çakışıyor. Sadece dev bağımlılığı, çalışmayı etkilemiyor.

---

## 3. Ortam değişkenleri

```bash
nano /var/www/deep/.env.production
```

```env
OPENAI_API_KEY=sk-...
SMTP_HOST=mail.deeproomai.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@deeproomai.com
SMTP_PASS=...
CONTACT_EMAIL=info@deeproomai.com
```

```bash
chmod 600 /var/www/deep/.env.production
```

Anahtar olmadan da site açılır; sadece `/api/chat`, `/api/stt`, `/api/tts` ve
iletişim formu 500 döner.

---

## 4. Build

```bash
cd /var/www/deep && npm run build
```

---

## 5. PM2

```bash
mkdir -p /var/log/pm2
cd /var/www/deep
pm2 start ecosystem.config.cjs
pm2 save
pm2 logs deeproom-web --lines 30
```

Lokal test:

```bash
curl -I http://127.0.0.1:3023
```

`200 OK` gelmeli.

---

## 6. Nginx

```bash
cp /var/www/deep/deploy/nginx-deeproomai.conf /etc/nginx/sites-available/deeproomai.com
ln -s /etc/nginx/sites-available/deeproomai.com /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

---

## 7. SSL

DNS yayıldıktan **sonra**:

```bash
certbot --nginx -d deeproomai.com -d www.deeproomai.com --redirect
```

Otomatik yenilemeyi doğrula:

```bash
certbot renew --dry-run
```

---

## 8. Doğrulama

```bash
curl -sSI https://deeproomai.com | head -5
curl -sSI https://www.deeproomai.com | head -5
pm2 status deeproom-web
```

---

## Güncelleme (sonraki deploy'lar)

```bash
cd /var/www/deep
git pull
npm ci --legacy-peer-deps
npm run build
pm2 reload deeproom-web
```
