# Panduan Pembuatan Landing Page LPH UNUGHA

Dokumen ini berisi langkah-langkah lengkap untuk membangun aplikasi landing page LPH UNUGHA dari awal menggunakan React, TypeScript, Vite, dan Tailwind CSS.

## 1. Persiapan Lingkungan Pengembangan (Environment Setup)

Pastikan Node.js sudah terinstal di komputer Anda.

### 1.1. Inisialisasi Proyek
Buat proyek baru menggunakan Vite:

```bash
npm create vite@latest lph-unugha -- --template react-ts
cd lph-unugha
npm install
```

### 1.2. Instalasi Dependensi Tambahan
Instal library yang dibutuhkan untuk styling, animasi, dan ikon:

```bash
# Tailwind CSS (via Vite plugin)
npm install -D tailwindcss @tailwindcss/vite

# Ikon dan Animasi
npm install lucide-react motion
```

### 1.3. Konfigurasi Tailwind CSS
Update `vite.config.ts` untuk menggunakan plugin Tailwind:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## 2. Konfigurasi Styling Global

Edit file `src/index.css` untuk mengatur font, warna tema, dan reset CSS.

```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
@import "tailwindcss";

/* Definisi Tema */
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, serif;
  --color-unugha-green: #006837; /* Warna Hijau Identitas */
  --color-unugha-gold: #D4AF37;  /* Warna Emas Identitas */
}

/* Base Styles */
body {
  font-family: var(--font-sans);
  background-color: #f8fafc;
  color: #1e293b;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
}
```

## 3. Pembuatan Komponen (Components)

Buat folder `src/components` dan buat file-file berikut:

### 3.1. Navbar (`src/components/Navbar.tsx`)
Komponen navigasi yang responsif (berubah tampilan saat di-scroll) dan memiliki menu mobile.
- Gunakan state `isScrolled` untuk mendeteksi scroll window.
- Gunakan state `isMobileMenuOpen` untuk toggle menu di layar kecil.
- Gunakan `lucide-react` untuk ikon Menu dan X.

### 3.2. Hero Section (`src/components/Hero.tsx`)
Bagian utama halaman dengan gambar latar belakang dan pesan utama.
- Gunakan `motion` dari library `motion/react` untuk animasi masuk (fade-in/slide-up).
- Tampilkan Judul Besar, Subjudul, dan Tombol CTA (Call to Action).

### 3.3. About Section (`src/components/About.tsx`)
Menjelaskan profil singkat LPH UNUGHA.
- Gunakan Grid Layout (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) untuk menampilkan fitur utama (Integritas, Profesional, dll).

### 3.4. Services Section (`src/components/Services.tsx`)
Menampilkan layanan yang tersedia.
- Tampilkan daftar layanan dengan ikon yang relevan.
- Tambahkan gambar ilustrasi kegiatan laboratorium atau pemeriksaan.

### 3.5. Process Section (`src/components/Process.tsx`)
Menjelaskan alur sertifikasi halal.
- Buat visualisasi langkah demi langkah (1, 2, 3, 4).
- Berikan link eksternal ke situs SIHALAL (BPJPH).

### 3.6. Contact Section (`src/components/Contact.tsx`)
Formulir kontak dan informasi alamat.
- Buat layout 2 kolom: Informasi Kontak (kiri) dan Form Input (kanan).
- Sertakan input untuk Nama, Email, dan Pesan.

### 3.7. Footer (`src/components/Footer.tsx`)
Bagian kaki halaman.
- Tampilkan logo, deskripsi singkat, link sosial media, dan tautan cepat.
- **Penting:** Tambahkan iframe Google Maps yang mengarah ke lokasi UNUGHA.

## 4. Integrasi Komponen (`src/App.tsx`)

Satukan semua komponen di file utama aplikasi.

```typescript
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

## 5. Menjalankan Aplikasi

### Mode Pengembangan (Development)
Untuk menjalankan aplikasi di lokal saat coding:
```bash
npm run dev
```
Akses di browser: `http://localhost:3000` (atau port yang tersedia).

### Build untuk Produksi
Untuk membuat file statis yang siap di-hosting:
```bash
npm run build
```
File hasil build akan berada di folder `dist/`.

## 6. Struktur Folder Akhir

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
