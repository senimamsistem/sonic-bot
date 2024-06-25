# Sonic Odyssey Bot Dari HCA

Sonic Odyssey Bot adalah aplikasi Node.js yang dirancang untuk mengirimkan transaksi kripto SOL (Solana) menggunakan frasa seed atau kunci pribadi ke alamat acak.

## Prasyarat

- Node.js terinstal di mesin Anda
- Manajer paket `npm` atau `yarn`

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan Sonic Odyssey Bot:

1. Buka [Google IDX](https://idx.google.com/)
2. Pilih "Import a repo" dan tempel URL repositori ini `https://github.com/senimamsistem/sonic-bot.git`
3. Buat file `accounts.json` dengan array frasa seed.
4. Buat file `privateKeys.json` dengan array kunci pribadi (dikodekan base58).

Contoh `accounts.json`:
```json
[
  "frasa_seed_1",
  "frasa_seed_2"
]
```

Contoh `privateKeys.json`:
```json
[
  "kunci_pribadi_base58_1",
  "kunci_pribadi_base58_2"
]
```

## Penggunaan

Untuk menjalankan bot, gunakan Node.js:

```bash
npm start
```

Ikuti petunjuk untuk memilih metode input (0 untuk frasa seed, 1 untuk kunci pribadi) dan tentukan jumlah alamat acak yang akan dihasilkan.

## Bantuan

Jika Anda memiliki pertanyaan atau masalah terkait bot ini, silakan merujuk ke [BOT ini](https://github.com/dante4rt/sonic-odyssey-bot) sebagai referensi.