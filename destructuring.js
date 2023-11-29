// destructuring array

const anime = ["one piece", "jujutsu kaisen"];

const [animeFavorite, animeOnGoing] = anime;
console.log(animeFavorite); // output : one piece
console.log(animeOnGoing); // output : jujutsu kaisen

// with rest parameter
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

const [today, ...tomorrow] = days;
console.log(today); // output : monday
console.log(tomorrow.join(" ")); // output : "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"

// ingin melewati element array
const [now, , , , , ...weekend] = days;
console.log(now); // output : monday
console.log(weekend.join(" ")); // output : saturday & sunday

// kita bisa memberi nilai default pada destructuring
const car = ["lamborghini"];

function destructuringDefault(carArray) {
  const [brand, type = "sport"] = carArray;
  return `${brand} dengan tipe ${type}`;
}
console.log(destructuringDefault(car));

// menukar nilai
let a = 10;
let b = 20;

// before
console.log(a);
console.log(b);
[a, b] = [b, a];

// after
console.log(a);
console.log(b);

// Parsing an array returned from a function
function numbers() {
  return [1, 2];
}
const [first, second] = numbers();
console.log(first);
console.log(second);

// destructuring object

const nama = {
  namaDepan: "noval",
  namaBelakang: "aula",
};

// beda dengan array untuk penamaan variable destructuring nya harus sama dengan property / key dari objeknya
// ini sama dengan kita mengakses objek seperti nama.namaDepan

// const { namaDepan, namaBelakang } = nama;
// console.log(namaDepan);

// solusinya kita bisa memberikan variable semu
//variable baru setelah titik dua
const { namaDepan: namadepan, namaBelakang } = nama;
//console.log(namaDepan); // output : undefined karena kita membuat / menampung variable baru
console.log(namadepan);

//Assigning to new variable names and providing default values
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5

// function destructuring object

function namaDepan({ namaDepan }) {
  return namaDepan;
}
console.log("function destructuring object :");
console.log(namaDepan(nama));

function drawChart(
  // nilai default values                         // dan obejk kosongnya untuk menerima nilai dari parameter
  // ketika kita tidak menginputkan nilai ke parameter maka nilai defaultnya akan di jalankan
  { size = "big", coords = { x: 0, y: 0 }, radius = 25 } = {}
) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});

// Nested object and array destructuring

const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"

// For of iteration and destructuring
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
