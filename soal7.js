function decryptMessage(encryptedMessage) {
  let decryptedMessage = '';
  for (let i = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);

      if (charCode >= 97 && charCode <= 122) {
          charCode = ((charCode - 97 - 5 + 26) % 26) + 97;
      } else if (charCode >= 65 && charCode <= 90) { 
          charCode = ((charCode - 65 - 5 + 26) % 26) + 65;
      }

      decryptedMessage += String.fromCharCode(charCode);
  }
  return decryptedMessage;
}
const encryptedMessages = [
  'xfqfr bfmdz',
  'gjxtp lzj rfz ifkyfw jxi snm',
  'gwt, gjxtp qz rfz rfpfs in bfwlty lfp?',
  'fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz',
  'dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu'
];

encryptedMessages.forEach((message, index) => {
  const decryptedMessage = decryptMessage(message);
  console.log(`Pesan rahasia ${index + 1}: ${decryptedMessage}`);
});
