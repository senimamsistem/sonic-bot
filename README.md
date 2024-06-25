# Sonic Odyssey Bot From HCA



## Prasyarat

- Node.js terinstal di mesin Anda
- Manajer paket `npm` atau `yarn`

## Instalasi

1. Clone repositori:

   ```bash
   git clone https://github.com/dante4rt/sonic-odyssey-bot.git
   ```

2. Navigasi ke direktori proyek:

   ```bash
   cd sonic-odyssey-bot
   ```

3. Pasang dependensi:

   ```bash
   npm install
   # atau
   yarn install
   ```

4. Siapkan file input:

   - Buat `accounts.json` dengan array frasa seed.
   - Buat `privateKeys.json` dengan array kunci pribadi (dikodekan base58).

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

Jalankan bot menggunakan Node.js:

```bash
npm start
```

Ikuti petunjuk untuk memilih metode input (0 untuk frasa seed, 1 untuk kunci pribadi) dan tentukan jumlah alamat acak yang akan dihasilkan.



## ???

Jika Anda memiliki pertanyaan atau masalah terkait bot ini, silakan referensi BOT  https://github.com/dante4rt/sonic-odyssey-bot

