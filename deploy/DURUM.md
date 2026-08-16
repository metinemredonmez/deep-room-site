# deeproomai.com — Nerede Kaldık

_Son güncelleme: 16 Ağustos 2026_

Proje: **deep-room-site** (Next.js 16.1.6, App Router, Tailwind, TypeScript)
Repo: `git@github.com:metinemredonmez/deep-room-site.git` — **private**, branch `master`

> Klonladıktan sonra ilk buraya bak. Adım adım kurulum için [DEPLOY.md](DEPLOY.md).

---

## Durum: canlıda

Site VPS'te pm2 altında çalışıyor, SSL kurulu. Deploy 16 Ağustos 2026'da tamamlandı.

---

## Sunucu

| | |
|---|---|
| VPS | `89.252.179.99` (`server.uzmanumre.com`), Ubuntu, nginx 1.24.0 |
| Uygulama yolu | `/var/www/deep` |
| Port | `3023` (127.0.0.1, nginx arkasında) |
| PM2 adı | `deeproom-web` |
| Nginx vhost | `/etc/nginx/sites-available/deeproomai.com` |
| Sertifika | `/etc/letsencrypt/live/deeproomai.com-0001/` — bitiş **14 Kasım 2026** |

**Önemli:** `185.106.208.2` VPS **değil** — guzel.net.tr paylaşımlı hosting'i.
Mail orada duruyor, web VPS'te.

---

## DNS (guzel.net.tr paneli, NS: `*.guzelhosting.com`)

| Host | Tür | Adres | Öncelik |
|---|---|---|---|
| `@` | A | `89.252.179.99` | — |
| `www` | CNAME | `deeproomai.com` | — |
| `mail` | A | `185.106.208.2` | — |
| `@` | MX | `mail.deeproomai.com` | 0 |

**MX'e dokunma.** `mail` A kaydı postayı hosting tarafında tutuyor. MX'i tekrar
`deeproomai.com`'a çevirirsen mail VPS'e gider ve orada mail sunucusu olmadığı
için **gelen e-postalar düşer**.

---

## Mimari — DB YOK

Repoda veritabanı, Dockerfile, docker-compose, ORM, migration **yok**. State hiçbir
yerde tutulmuyor. Dört API route'u da dış servise gidiyor:

| Route | Bağımlılık |
|---|---|
| `/api/chat` | OpenAI |
| `/api/stt` | OpenAI (Whisper) |
| `/api/tts` | OpenAI |
| `/api/contact` | SMTP / nodemailer |

Geri kalan 44 sayfa statik veya SSG (blog `generateStaticParams` kullanıyor).

---

## Ortam değişkenleri — `/var/www/deep/.env.production` (chmod 600)

```env
OPENAI_API_KEY=sk-proj-...
SMTP_HOST=mail.deeproomai.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@deeproomai.com
SMTP_PASS=...
CONTACT_EMAIL=info@deeproomai.com
```

- Bunlar boşken de site açılır; sadece chat/TTS/STT ve iletişim formu 500 döner.
- Port 465 kullanacaksan `SMTP_SECURE=true` yap.
- Değerleri tırnak içine alma — Next.js parser'ı tırnağı değerin parçası sayar.
- Env değişince rebuild gerekmez, `pm2 restart deeproom-web` yeterli.
- Lokalde `.env.local` kullanılıyor (gitignore'da).

---

## Güncelleme akışı

```bash
cd /var/www/deep && git pull && npm ci --legacy-peer-deps && npm run build && pm2 restart deeproom-web && pm2 save
```

`npm ci` **`--legacy-peer-deps` olmadan patlar**: `eslint@^8` ile
`eslint-config-next@16` (eslint>=9 ister) çakışıyor. Sadece dev bağımlılığı,
çalışmayı etkilemiyor. Kalıcı çözüm: `package.json`'da eslint'i `^9`'a çekmek.

Lokalde çalıştırmak için: `npm install --legacy-peer-deps && npm run dev` → http://localhost:3000

---

## Deploy sırasında çıkan tuzaklar

**1. Repo private.** HTTPS ile klon çalışmaz (GitHub şifre auth'unu kapattı).
Sunucuda kurulu SSH anahtarı var, `git@github.com:` ile klonla.

**2. Build'i atlarsan pm2 sonsuz restart döngüsüne girer.**
`Could not find a production build in the '.next' directory` hatası. `npm run build`
mutlaka `pm2 start`'tan önce.

**3. Port çakışması.** 3000-3022 arası dolu. Boş port bulmak için:

```bash
for p in $(seq 3020 3099); do ss -tln | grep -q ":$p " || { echo $p; break; }; done
```

Değiştirirsen `ecosystem.config.cjs` ve `deploy/nginx-deeproomai.conf` **ikisini
birden** güncelle.

**4. Eski nginx config'i (`/etc/nginx/sites-enabled/deeproomai`) çakışıyordu.**
`127.0.0.1:3001`'e proxy'liyordu (ölü port → 502) ve `server_name`'inde markdown
linki vardı. `/root/deeproomai.nginx.bak`'a yedeklendi, devre dışı.
`conflicting server name` uyarısı görürsen sebebi budur.

**5. Markdown linkleri.** Komutları kopyalarken `[www.deeproomai.com](https://...)`
şeklinde köşeli parantez görürsen temizle — nginx `server_name`'e literal yazıyor.
Certbot'ta `-d` yerine `--cert-name` kullanmak bu sorunu tamamen atlatır.

---

## Yapılacaklar

- [ ] **OpenAI API key'ini rotate et** — deploy sırasında sohbete yapıştırıldı.
      https://platform.openai.com/api-keys
- [ ] `info@deeproomai.com` e-posta hesabını hosting panelinden aç, `SMTP_PASS`'ı doldur
- [ ] `certbot certificates` ile bak, eski `deeproomai.com` (`-0001` olmayan)
      kullanılmıyorsa `certbot delete --cert-name deeproomai.com`
- [ ] GitHub 52 dependabot açığı bildiriyor (25 high) — gözden geçir
- [ ] `/root/.ssh/deeproom_deploy*` anahtarı kullanılmadı (mevcut anahtar yetti),
      silinebilir; `/root/.ssh/config`'teki `github-deeproom` bloğu da

---

## Faydalı komutlar

```bash
pm2 status deeproom-web
pm2 logs deeproom-web --lines 50 --nostream
curl -I http://127.0.0.1:3023          # uygulama ayakta mı
curl -sSI https://deeproomai.com       # dışarıdan
nginx -t && systemctl reload nginx
certbot renew --dry-run
dig +short @tr.guzelhosting.com deeproomai.com A   # cache'siz DNS
```
