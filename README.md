# Pastel Jeremi

Website menu Pastel Jeremi. Pesanan dikirim lewat WhatsApp.

## Isi folder

- `index.html` - halaman utama
- `style.css` - tampilan
- `main.js` - tombol tambah/kurang dan pesan WhatsApp
- `hero.jpg`, `sayuran.jpg`, `telur.jpg`, `ayam.jpg`, `ayam-telur.jpg` - foto
- `vercel.json` - pengaturan keamanan saat online di Vercel

## Ganti harga atau menu

Buka `index.html`, cari bagian `<!-- Menu -->`. Tiap menu ada di dalam `<div class="menu-card" ...>`.
Kalau harga berubah, ganti di dua tempat: `data-harga="2500"` dan tulisan `Rp2.500`.

## Ganti nomor WhatsApp

- `main.js` baris pertama: `const nomorWA = '6283115601008';` (pakai 62, tanpa 0 di depan)
- `index.html`: cari `6283115601008` dan `0831-1560-1008`

## Cara online gratis (GitHub + Vercel)

1. Buat akun di github.com (gratis).
2. Klik **New repository**, beri nama `pastel-jeremi`, pilih **Public**, klik **Create repository**.
3. Klik **uploading an existing file**, lalu seret semua isi folder ini (10 file, semuanya di satu folder). Klik **Commit changes**.
4. Buat akun di vercel.com, pilih **Continue with GitHub**.
5. Klik **Add New > Project**, pilih repo `pastel-jeremi`, klik **Import**.
6. Framework Preset pilih **Other**. Tidak perlu ubah apa-apa lagi. Klik **Deploy**.
7. Tunggu sebentar, website online di alamat seperti `pastel-jeremi.vercel.app`.

Setiap kali file di GitHub diubah, Vercel otomatis memperbarui websitenya.

## Ganti nama alamat (gratis)

Di Vercel buka project > **Settings > Domains**. Alamat `.vercel.app` bisa diganti selama namanya belum dipakai orang lain, misalnya `pasteljeremi.vercel.app`.

## Setelah online

- Buka di beberapa HP, coba pesan sampai masuk ke WhatsApp.
- Daftarkan toko di Google Maps lewat **Google Business Profile** (gratis), masukkan link website.
- Pasang link website di bio Instagram dan profil WhatsApp Business.
