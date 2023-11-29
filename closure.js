// function init() {
//   let nama = "noval";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

function init() {
  // let nama = "noval";
  return function (nama) {
    console.log(nama);
  };
}
let panggilNama = init();
panggilNama("nopal");

function sayHello(greeting) {
  return function (name) {
    console.log(`Hello ${name}, selamat ${greeting}`);
  };
}
let selamatPagi = sayHello("pagi");
selamatPagi("nopal");

let addCount = (function () {
  let count = 0;
  return function () {
    return ++count;
  };
})();

console.log(addCount());

const dataClient = [];
function managementContact() {
  return {
    createContact: function (NewNama, NewEmail, NewNoHp) {
      var dataContact = {
        nama: NewNama,
        email: NewEmail,
        noHp: NewNoHp,
      };
      dataClient.push(dataContact);
    },
    getContact: function () {
      return dataClient.map((contact) => contact);
    },
  };
}
let client = managementContact();
client.createContact("nopal", "nopal2121@gmail.com", +628771212);
client.createContact("nopal", "nopal2121@gmail.com", +628771212);
console.log(client.getContact());

function calculator() {
  let result = 0;
  return {
    createCalculator: function (a) {
      return {
        add: function (b) {
          return (result += a + b);
        },
        substract: function (b) {
          return (result += a);
        },
      };
    },
    getResult: function () {
      return result;
    },
  };
}

let kalkulator = calculator();
kalkulator.createCalculator(2).add(5);

console.log(kalkulator.getResult());

function createGradesCalculator(grade) {
  return function () {
    let total = grade.reduce((acc, value) => acc + value, 0);
    return total / grade.length;
  };
}

const calculateAverage = createGradesCalculator([90, 85, 88, 92, 78]);
console.log(calculateAverage());

function createFilter(predicate) {
  return function (numbers) {
    let filterNumber = numbers.filter(predicate);
    return filterNumber;
  };
}
const isEven = (number) => number % 2 === 0;
const filterEvenNumbers = createFilter(isEven);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
