function cekDuplikat(array) {
  var angkaSeen = {};
  for (var i = 0; i < array.length; i++) {
      var angka = array[i];
      if (angkaSeen[angka]) {
          return true;
      }
      angkaSeen[angka] = true;
  }
  return false;
}
var input = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18,  20, 17, 19];

console.log(cekDuplikat(input));
