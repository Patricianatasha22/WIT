# Next Level WPU

Prototipe *front-end* platform belajar coding berbasis artikel dalam Bahasa Indonesia. Proyek ini dibuat untuk kompetisi mini-hackathon **"Unlocking HER Potentials"** yang diselenggarakan oleh Web Programming UNPAS (2023) dan meraih **juara 1**.

Tema proyek mengacu pada platform belajar Progate. Logo dan gaya visual Progate hanya digunakan untuk keperluan kompetisi.

**Demo langsung:** https://next-level-wpu.vercel.app/

## Latar belakang

Banyak pemula kesulitan menemukan materi coding yang mudah dipahami dalam Bahasa Indonesia, apalagi yang terasa menyenangkan untuk dipelajari. Next Level WPU menggabungkan artikel yang ditulis komunitas dengan unsur *gamification* (level, misi, dan papan peringkat) agar belajar terasa lebih seru dan konsisten.

## Fitur

- **Mode Reader dan Writer**: pengguna dapat beralih antara membaca dan menulis artikel.
- **Daftar artikel**: artikel dapat dijelajahi berdasarkan kategori (misalnya Python, Java, React) dan level (beginner, intermediate, advanced).
- **Dashboard pribadi**: grafik aktivitas bulanan, grafik topik yang sudah dipelajari, serta misi dan hadiah (XP) yang bisa diklaim.
- **Leaderboard**: papan peringkat pengguna.
- **Forum komunitas**: tempat bertanya dan berdiskusi.
- **Koleksi dan pengaturan**: halaman untuk menyimpan artikel dan mengatur akun.

## Teknologi

- HTML, CSS, dan JavaScript
- [Tailwind CSS](https://tailwindcss.com/) dan [DaisyUI](https://daisyui.com/) untuk tampilan
- [Chart.js](https://www.chartjs.org/) untuk grafik pada dashboard
- Vercel untuk hosting

## Struktur proyek

```
WIT/
├── index.html        # Halaman utama
├── Reader/           # Halaman untuk pembaca (artikel, dashboard, leaderboard, forum, dll.)
├── Writer/           # Halaman untuk penulis
├── js/               # Skrip JavaScript (misalnya konfigurasi grafik)
└── assets/           # Gambar dan ikon
```

## Cara menjalankan

Proyek ini berupa situs statis, jadi tidak perlu instalasi.

1. *Clone* repositori ini:
   ```bash
   git clone https://github.com/Patricianatasha22/WIT.git
   ```
2. Buka folder proyek, lalu buka `index.html` di browser.

Agar tampilan dan tautan antarhalaman berjalan dengan baik, Anda dapat menjalankannya melalui server lokal, misalnya dengan ekstensi *Live Server* di VS Code.

> Catatan: Tailwind CSS, DaisyUI, dan Chart.js dimuat melalui CDN, sehingga dibutuhkan koneksi internet.

## Batasan

Ini adalah **prototipe front-end**. Data seperti artikel, XP, peringkat, dan grafik masih berupa contoh statis dan belum terhubung ke *backend* atau basis data. Sistem akun dan penyimpanan data belum diimplementasikan.

## Kontribusi saya

Proyek ini dikerjakan bersama dua orang rekan tim.

Peran saya:
Pengembangan (coding): mengimplementasikan halaman-halaman situs menggunakan HTML, CSS, dan JavaScript, termasuk halaman dashboard Reader dengan grafik aktivitas, grafik topik, dan kartu misi beserta pop-up klaim hadiah.

Pemenuhan kriteria: memastikan hasil akhir sesuai dengan kriteria penilaian dari panitia.

Ketepatan waktu: memastikan proyek selesai sebelum tenggat kompetisi.

## Penulis

Patricia Natasha. [GitHub](https://github.com/Patricianatasha22)
