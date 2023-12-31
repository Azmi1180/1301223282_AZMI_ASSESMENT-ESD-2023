function binarySearch(urutanKedatangan, temp) {
  var left = 0;
  var right = urutanKedatangan.length - 1;

  while (left <= right) {
      var mid = Math.floor((left + right) / 2);

      if (urutanKedatangan[mid] === temp) {
          return mid;
      } else if (urutanKedatangan[mid] < temp) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return -1;
}
var urutanKedatanganTerurut = ["Ningguang", "Hutao", "Xiao", "Childe"];
var fotoXiao = "Kue masih utuh di meja.";
var indexXiao = binarySearch(urutanKedatanganTerurut, "Xiao");
if (indexXiao !== -1 && indexXiao < urutanKedatanganTerurut.length - 1) {
  var tersangka = urutanKedatanganTerurut[indexXiao + 1];
  console.log(tersangka + " adalah yang paling mungkin mengambil kue.");
} else {
  console.log("Tidak dapat menentukan tersangka.");
}