//CONFIG
var BOT_TOKEN = "" //BOT TOKEN ANDA
var SS_URL = "" //URL SPREADSHEET
var SHEET_NAME = "Laporan_Pemasukan" //NAMA SHEET
var SHEET_NAMEE = "Laporan_Pengeluaran" //NAMA SHEET 2
var USERS = [
    
] //CHAT ID, bisa lebih dari 1


//BEGIN
var SHEET = SpreadsheetApp.openByUrl(SS_URL).getSheetByName(SHEET_NAME);
var SHEETT = SpreadsheetApp.openByUrl(SS_URL).getSheetByName(SHEET_NAMEE);

function doGet(e) {
	return HtmlService.createHtmlOutput('<h1>OK</h1>')
}

function doPost(e) {
	if (e.postData.type == "application/json") {
		let update = JSON.parse(e.postData.contents);
		if (update) {
			commands(update)
			return true
		}
	}
}

function commands(update) {

	let chatId = update.message.chat.id;
	let first_name = update.message.chat.first_name;
	let text = update.message.text || '';
	let tanggal = new Date().toLocaleString();

	if (USERS.includes(chatId)) {

		if (text.startsWith("/start")) {
			sendMessage({
				chat_id: chatId,
				text: "==> Welcome to BOT Pengeluaran dan Pemasukan harian <==\nMulai laporan Pengeluaran dengan cara\n/newPengeluaran [harga] [#kategori] [item1, item2 dst]\n\nMulai laporan Pemasukan dengan cara\n/newPemasukan [jumlah] [#kategori] [item1, item2 dst]\n\n\n==>Auto Save Google Sheets <=="
			})
		} else if (text.startsWith("/newPemasukan")) {
			let item,
				jumlah,
				kategori,
				stext = text.split(' ')

			jumlah = eval(stext[1]);
			kategori = stext[2].startsWith('#') ? stext[2].replace('#', '') : '';
			stext.splice(0, 3);
			item = stext.join(' ')
            
			if (jumlah && kategori && item) {
				insert_value([
					tanggal,
					kategori,
					item,
					jumlah,
					chatId,
					first_name
				], SHEET)

				sendMessage({
					chat_id: chatId,
					text: 'Laporan sukses HARY.\nPENGINGAT : Jangan boros-boros GOBLOG cari duit susah !'
				})
			}
		} else if (text.startsWith("/newPengeluaran")) {
            let item,
            harga,
            kategori,
            stext = text.split(' ')

        harga = eval(stext[1]);
        kategori = stext[2].startsWith('#') ? stext[2].replace('#', '') : '';
        stext.splice(0, 3);
        item = stext.join(' ')

        if (harga && kategori && item) {
            insert_value([
                tanggal,
                kategori,
                item,
                harga,
                chatId,
                first_name
            ], SHEETT)

            sendMessage({
                chat_id: chatId,
                text: 'Laporan sukses HARY.\nPENGINGAT : Jangan boros-boros GOBLOG cari duit susah !'
            })
        } else {
            sendMessage({
                chat_id: chatId,
                text: 'Gagal. Pastikan sesuai format. \n/new [jumlah] [#kategori] [item1, item2 dst]'
            })
        }
        }
	}
}

function sendMessage(postdata) {
	var options = {
		'method': 'post',
		'contentType': 'application/json',
		'payload': JSON.stringify(postdata),
		'muteHttpExceptions': true
	};
	UrlFetchApp.fetch('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage', options);
}

