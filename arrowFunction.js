// menghitung jumlah huruf pada masing2 elemen pada sebuah array

const buah = ["pisang", "anggur", "apel", "lemon"];

const jumlahHuruf = buah.map((buah) => ({ nama: buah, jumlahHuruf: buah.length }));

console.log(jumlahHuruf);

// latihan arrow function
const doubleNumber = (a) => a * a;
console.log(doubleNumber(2));

const evenNumber = (a) => a % 2 === 0;
console.log(evenNumber(2));

const Capital = (a) => a.charAt(0).toUpperCase() + a.substring(1);
console.log(Capital("noval"));

const maksimumArray = (array) => Math.max(...array);
console.log(maksimumArray([212, 32, 12]));

const isPrima = (angka) => {
  if (angka <= 1) return false;
  if (angka <= 3) return true;

  if (angka % 2 === 0 || angka % 3 === 0) return false;

  let i = 5;
  while (i * i <= angka) {
    if (angka % i === 0 || angka % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
};

console.log(isPrima(47));
