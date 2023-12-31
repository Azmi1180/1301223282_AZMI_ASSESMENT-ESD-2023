const fullName = "Naip Lovyu";
let userIG = fullName.replace(/\s/g, "").toLowerCase();
const panjangKata = 6;
let kombinasiKata = [];
function generateCombinations(prefix, remainingLength) {
    if (remainingLength === 0) {
        kombinasiKata.push(prefix);
        return;
    }
    for (let char of userIG) {
        generateCombinations(prefix + char, remainingLength - 1);
    }
}
generateCombinations("", panjangKata);
console.log(kombinasiKata.length);
