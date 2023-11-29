// cara membuat objek

// 1. objek literal
// tidak efektif untuk objek yang banyak karena harus buat persatu
const mahasiswa = {
  nama: "noval",
  semester: 2,
  pelajaran: ["pemograman web", "basis data"],
  waktubelajar: function () {
    console.log("say hello");
  },
  belanja: {
    telur: 2000,
    mieGoreng: 5000,
  },
  bayar: function (belanja, jumlah) {
    return (total = belanja * jumlah);
  },
};

// 2. function declaration
//method object terpisah
const peopleMethode = {
  minum: function (gelas) {
    this.energi += gelas;
  },
};
function people(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.minum = peopleMethode.minum;

  /*  ketika kita membuat function ini dan walaupun kita 
    tidak memanggilnya tetep kehitung di memory, solusinya
    membuat method object terpisah 
*/
  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama} selamat makan`);
  };
  return mahasiswa;
}
const noval = people("noval", 200);
console.log(noval);

// 3. Constructor function
function characther(nama, energi) {
  //let mahasiswa = {};
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama} selamat makan`);
  };
  //return mahasiswa;
}
const guy = new characther("kolas", 3);

// 4. Object Creation

const carMethode = {
  touring: function (distance) {
    this.gasoline -= distance;
  },
  fillGasoline: function (litter) {
    this.gasoline += litter;
  },
};

function car(name, brand, speed, gasoline) {
  let car = Object.create(carMethode);
  car.name = name;
  car.brand = brand;
  car.speed = speed;
  car.gasoline = gasoline;

  return car;
}
const lembo = car("carlos", "roger", 200, 20000);

// object prototype

function restaurant(name, food, drink) {
  this.name = name;
  this.food = food;
  this.drink = drink;
}
restaurant.prototype.order = function (quantity) {
  return `${this.name}, anda memesan ${this.food} sebanyak ${quantity} porsi`;
};

const gacoan = new restaurant("noval", "mie iblis", "es teh");
gacoan.order(3);
