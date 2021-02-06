var vCardsJS = require("vcards-js")
var fs = require("fs")
var vCard = vCardsJS()
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function generator(nCards) {
	var strCard = ""
	for (var i = 0; i < nCards; i++) {
		let digit = Math.floor(Math.random() * 15) + 10
		let name = makeid(digit)
		vCard.firstName = name.substring(0, digit/3);
		vCard.middleName = name.substring(digit/3, digit/3+1);
		vCard.lastName = name.substring(digit/3*2, digit/3*2+1);
		vCard.organization = makeid(Math.floor(Math.random() * 15) + 10);
		vCard.workPhone = `+65 ${Math.floor(10000000 + Math.random() * 90000000)}`;
		vCard.birthday = new Date(Math.floor(Math.random() * 50) + 1950, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27) + 1);
		vCard.title = makeid(Math.floor(Math.random() * 15) + 10);
		vCard.url = makeid(Math.floor(Math.random() * 15) + 10);
		vCard.note = makeid(Math.floor(Math.random() * 15) + 10);
		strCard+=vCard.getFormattedString()
	}
	return strCard
}

for (var i = 0; i < 20; i++) {
	fs.writeFile(`./contact/file-${i}.vcf`, generator(Math.floor(Math.random() * 5) +2), e=>{// random từ 2->5 người/file
		console.log(e)
	})
}