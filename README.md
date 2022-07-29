# Laporan-Keuangan-Bot
Laporan keuangan, Pencatatan pengeluaran dan pemasukan dengan Bot Telegram yang otomatis terintegrasi dengan Google Spreadsheet


# Screenshot Result

![Bot Tele](https://user-images.githubusercontent.com/109408909/181763001-928aebef-9ab8-4a26-a3dd-4457c5d872a3.png)

Screenshot Google Sheet
![SS Google Sheets](https://user-images.githubusercontent.com/109408909/181763833-5bc799e3-bd99-4611-98d1-b52a4112fa00.png)

# Mulai

## Buat Bot telegram
1. Buka telegram search @BotFather
2. Create New Bot /newbot
3. Masukkan nama kemudian username.
4. Setelah berhasil maka akan mendapatkan Bot Token.

## Buat Spreadsheet dengan kolom:
Khusus Pengeluaran
1. ID
2. Tanggal
3. Kategori
4. Item
5. Harga
6. ID Pelapor
7. Nama Pelapor

Khusus Pemasukan
1. ID
2. Tanggal
3. Kategori
4. Item
5. Jumlah
6. ID Pelapor
7. Nama Pelapor

## Buat App Script 
1. Buka index.gs
2. Sesuaikan Token, Spreadsheet URL, Nama sheet, dan Pengguna bot (Chat ID*)
3. Deploy sebagai Web app, dan simpan urlnya

## Set webhook Bot Telegram
1. Buka di browser https://api.telegram.org/bot[token]/setwebhook?url=[url hasil deploy]

## *Note:
Untuk mendapatkan Chat ID, buka telegram, 
search @getYourID_bot atau https://t.me/getyourid_bot atau https://t.me/get_id_bot

