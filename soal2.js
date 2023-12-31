function isPalindrome(str) {
  var cekKata = str.toLowerCase().replace(/[\W_]/g, '');
  var kebalik = cekKata.split('').reverse().join('');
  return cekKata === kebalik;
}
var input = prompt("Input Palindrome : ");
var result = isPalindrome(input);
if (result) {
  console.log("suka blyat");
} else {
  console.log("eureeka!");
}

