# InviteKita — Website Jasa Undangan Digital

Website landing page responsif untuk jasa pembuatan undangan digital. Dibuat menggunakan HTML, CSS, dan JavaScript biasa sehingga mudah diedit lewat GitHub tanpa framework atau proses build.

## Isi fitur
- Layout modern, minimalis, dan responsif untuk desktop maupun HP.
- Daftar template dengan filter kategori: pernikahan, ulang tahun, dan acara lainnya.
- Paket harga yang dapat diubah.
- Tombol pemesanan WhatsApp.
- FAQ, CTA, dan navigasi mobile.
- Bisa dipublikasikan gratis memakai GitHub Pages.

## Cara edit di GitHub
1. Buat repository baru di GitHub, misalnya `undangan-digital`.
2. Upload file `index.html`, `style.css`, `script.js`, dan `README.md` ke root repository.
3. Buka `script.js`, klik ikon pensil (**Edit this file**).
4. Ubah bagian `CONFIG`:
   - `siteName`: nama brand kamu.
   - `whatsappNumber`: nomor WhatsApp bisnis, format internasional tanpa `+`, spasi, atau strip. Contoh `6281234567890`.
   - `templates`: daftar desain, kategori, harga, dan detail yang ditampilkan.
   - `packages`: nama paket, harga, deskripsi, dan fitur.
5. Klik **Commit changes** untuk menyimpan perubahan.
6. Buka **Settings → Pages**.
7. Pada **Build and deployment**, pilih **Deploy from a branch**.
8. Pilih branch `main`, folder `/(root)`, lalu klik **Save**.
9. Tunggu proses deploy. URL biasanya berbentuk `https://USERNAME.github.io/NAMA-REPOSITORY/`.

## Edit tampilan
- `index.html`: struktur dan teks tiap bagian.
- `style.css`: warna, font, jarak, layout, dan tampilan responsif.
- `script.js`: data template, paket, harga, nama brand, dan WhatsApp.

## Penting sebelum dipublikasikan
- Ganti nomor WhatsApp contoh di `script.js`. Nomor contoh belum tentu milik kamu.
- Harga dan fitur yang ada hanyalah contoh; sesuaikan dengan layanan sebenarnya.
- Website ini adalah halaman promosi/etalase. Form order dan dashboard admin belum terhubung ke database; perubahan konten dilakukan dengan mengedit file dan commit ke GitHub.
- Google Fonts memerlukan koneksi internet. Jika font eksternal gagal dimuat, situs akan memakai font cadangan.
- GitHub Pages cocok untuk website statis. Jangan menaruh password, secret API key, atau data pribadi pelanggan di file JavaScript publik.

## Lisensi
Silakan ubah dan gunakan untuk proyek bisnismu sendiri.
