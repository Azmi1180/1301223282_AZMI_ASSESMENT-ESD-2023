function analisisReview(ratings) {
  ratings.sort(function(a, b) {
      return a - b;
  });
  var rendah = ratings[0];
  var tinggi = ratings[ratings.length - 1];
  var totalRating = 0;
  for (var i = 0; i < ratings.length; i++) {
      totalRating += ratings[i];
  }
  var ratarata = totalRating / ratings.length;
  return {
      rendah: rendah,
      tinggi: tinggi,
      ratarata: ratarata
  };
}
var inputReview = prompt("Masukkan nilai review aplikasi (pisahkan dengan koma, contoh: 4.5,2.0,1.5):");
var ratings = inputReview.split(',').map(function(item) {
  return parseFloat(item);
});
var hasilAnalisis = analisisReview(ratings);
console.log(hasilAnalisis.rendah +", "  + hasilAnalisis.tinggi + ", " + hasilAnalisis.ratarata);
