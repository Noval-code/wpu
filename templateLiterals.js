// template literals
// syarat menggunakan template literals harus diawali dengan backtick = ``
const nama = "nopal";
const umur = 18;

// console.log(`Halo nama saya ${expression} dan umur saya ${expression}`);
// dalam expression kita bisa menampung sebuah variable
// tapi tidak sebatas itu kita juga bisa melakukan logic
// seperti pengkondisian dan perulangan

console.log(`Halo nama saya ${nama} dan umur saya ${umur}`);
// expression dengan pengkondisian
let number = 10;
console.log(`bilangan ini adalah ${number % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragment

const cars = [
  {
    name: "nascar",
    brand: "bmw",
  },
  {
    name: "lambert",
    brand: "lambo",
  },
  {
    name: "crv",
    brand: "honda",
  },
];

const el = `<div class="cars">
${cars
  .map(
    (car) => `<ul>
  <li>${cars.name}</li>
  <li>${cars.brand}</li>
</ul>`
  )
  .join("")}
</div>`;

const lagu = {
  judul: "hysteria",
  penyanyi: "muse",
};

const song = `<div class="lagu">

  <li>${lagu.penyanyi}</li>
  <li>${lagu.judul} ${lagu.feat ? `${lagu.feat}` : ``}</li>
</ul>
</div>`;

// HTML fragment bersarang

const mhs = {
  nama: "nopal",
  semester: 3,
  mataKuliah: ["Pemograman Komputer", "Pemograman Web", "Sistem Basis Data", "Matematika Numerik"],
};
function cetakMataKuliah(mataKuliah) {
  return `
         <ol>
         ${mataKuliah.map((mk) => `<li>${mk}</li>`)}
         </ol>
    `;
}
function cetak(mataKuliah) {
  let result = `<ol>`;
  mataKuliah.forEach((mk) => {
    result += `<li>${mk}</li>`;
  });
  result += `</ol>`;
  return result;
}
// kita juga bisa menambahkan function pada template literals
const mahasiswa = `<div class="mahasiswa">
<h2>${mhs.nama}</h2>
<span class="semester">semester : ${mhs.semester}</span>
<h4>mata kuliah :</h4>
${cetak(mhs.mataKuliah)}

</div>`;

function coba(strings, ...values) {
  return strings.reduce((result, str, index) => `${result}${str}${values[index] || ""},''`);
}
// Tagged Template
const str = coba`Halo nama saya ${nama} dan umur saya ${umur}`;

const skincare = [
  {
    name: "kahf",
    price: 45000,
  },
  {
    name: "azarine",
    price: 30000,
  },
  {
    name: "product",
    price: 40000,
  },
];

// function displayProduct(product) {
//   return product.sort((a, b) => a.price - b.price);
// }

function displayProduct(product) {
  const element = product.map((el) => el);

  return element;
}
const produk = displayProduct(skincare);
console.log(produk);
