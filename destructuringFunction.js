// destructuring function
function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}

// destructuring
const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
console.log(tambah); // 5
console.log(kurang); // -1
console.log(kali); // 6
console.log(bagi); // 0.6

function kalkulator(a, b) {
  return {
    penambahan: a + b,
    pengurangan: a - b,
    perkalian: a * b,
    pembagian: a / b,
  };
}

// destructuring
const { perkalian, pengurangan, pembagian, penambahan } = kalkulator(2, 3);
console.log(penambahan); // 5
console.log(pengurangan); // -1
console.log(perkalian); // 6
console.log(pengurangan); // 0.6

const mahasiswa = {
  nama: "noval",
  semester: 3,
  nilai: {
    tugas: 90,
    uts: 95,
    uas: 98,
  },
};

// disini kita akan destructuring melalui parameter function

function getMahasiswa({ nama, semester, nilai: { tugas, uts, uas } }) {
  return `Halo nama saya ${nama} semester ${semester}
nilai uas saya ${uas}`;
}

// tetapi ketika kita menginputkan argument ke dalam
//functionnya adalah sebuah objek

console.log(getMahasiswa(mahasiswa));
