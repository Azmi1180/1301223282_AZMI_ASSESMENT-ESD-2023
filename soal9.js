function analisisAnak(anakNakal) {
  const countAnak = {};

  anakNakal.forEach(anak => {
      if (countAnak[anak]) {
          countAnak[anak]++;
      } else {
          countAnak[anak] = 1;
      }
  });

  const sortedAnak = Object.keys(countAnak).sort((a, b) => countAnak[b] - countAnak[a]);

  if (countAnak[sortedAnak[0]] === countAnak[sortedAnak[1]]) {
      const terbanyak = sortedAnak.filter(anak => countAnak[anak] === countAnak[sortedAnak[0]]);
      return `${terbanyak.join(" dan ")} Nackal`;
  } else {
      return `semuanya anak baik`;
  }
}

// Test cases
const anakNakal1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
console.log(analisisAnak(anakNakal1));

const anakNakal2 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"];
console.log(analisisAnak(anakNakal2));

const anakNakal3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];
console.log(analisisAnak(anakNakal3));
