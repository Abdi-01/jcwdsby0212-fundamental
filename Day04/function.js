// FUNCTION
/**
 * - Sekumpulan program yang ditujukan untuk menyelesaikan proses khusus
 * - Function bersifat reusable yang bisa digunakan berulang-ulang
 * - Function bersifat modular
 * - Built-in function : fungsi bawaan javascript
 * - User-defined function : fungsi yang dibuat sendiri
 * - Jenis function :
 *     - Declarative function :
 *       function namaFunc(param1, param2,...){
 *          // task program
 *       }
 *     - Function expression :
 *       const namaFunc = function(param1, param2,...){
 *          // task program
 *       }
 *     - Arrow function :
 *       const namaFunc = (param1, param2,...) => {
 *          // task program
 *       }
 * - Function tidak harus menyiapkan/menerima parameter
 * - Ketika menggunakan parameter, pastikan data yang dimasukkan itu berurutan
 * - Function boleh menghasilkan nilai balik / return value atau tidak menghasilkan nilai balik
 * */

// Declarative function
function penjumlahan() {
  let angkaA = 20;
  let angkaB = 15;
  const hasil = angkaA + angkaB;
  console.log("Cek roses penjumlahan :", hasil);

  //   nilai baik / return value
  return hasil;
}

// Memanggil function
penjumlahan;

// Menjalankan function
penjumlahan();
console.log("Output func :", penjumlahan());

function pengurangan(angakA, angkaB) {
  console.log(angakA, angkaB);
  const hasil = angakA - angkaB;
  console.log("Cek proses pengurangan :", hasil);
  return hasil;
}

let hasilPengurangan = pengurangan(20, 15) * 2;

console.log(hasilPengurangan);

console.log(typeof pengurangan(40, 15));

// Parameter default value
function perkalian(angakA = 0, angkaB = 0) {
  console.log(angakA, angkaB);
  const hasil = angakA * angkaB;
  return hasil;
}

console.log(perkalian());

function evenOdd(value) {
  console.log(value);
  let result = "";
  const modValue = value % 2;
  // Cara 1
  //   console.log(modValue);
  //   if (!modValue) {
  //     result = "genap";
  //   } else {
  //     result = "ganjil";
  //   }
  // Cara 2
  result = !modValue ? "genap" : "ganjil"; // ternary operator
  console.log(result);
  return result;
}

console.log(evenOdd(3));

// Arrow function
// const evenOddArrow = (value) => {
//   return value % 2 === 0 ? "Genap" : "Ganjil";
// };
const evenOddArrow = (value) => (value % 2 === 0 ? "Genap" : "Ganjil");
console.log(evenOddArrow(4));

// Callback Function : sebuah function yang dimasukkan kedalam function lain melalui parameter yang disediakan

function ganjilGenap(callback, angkaA, angkaB) {
  // callback : (valueA,valueB)=> valueA-valueB
  console.log(callback);
  // angkaA : 10
  console.log(angkaA);
  // angkaB : 12
  console.log(angkaB);
  console.log(typeof callback);
  console.log(callback(angkaA, angkaB));
  // callback : (valueA,valueB)=> 10-12
  const modValue = callback(angkaA, angkaB) % 2;
  let result = "";
  if (!modValue) {
    result = "GENAP";
  } else {
    result = "GANJIL";
  }
  return result;
}

let hasil = ganjilGenap((valueA, valueB) => valueA - valueB, 10, 12);
console.log(hasil);

function ganjilGenap(callback) {
  console.log(callback);
  console.log(typeof callback);
  let angkaA = Math.round(Math.random() * 10);
  console.log(angkaA);
  let angkaB = Math.round(Math.random() * 10);
  console.log(angkaB);
  console.log(callback(angkaA, angkaB));
  //   callback : (valueA, valueB) => valueA + valueB
  const modValue = callback(angkaA, angkaB) % 2;
  let result = "";
  if (!modValue) {
    result = "GENAP";
  } else {
    result = "GANJIL";
  }
  return result;
}

hasil = ganjilGenap((valueA, valueB) => valueA + valueB);
console.log(hasil);

// let hasil = ganjilGenap(penjumlahan);
// console.log(hasil);
// function executeCb() {
//   return pengurangan(5, 2);
// }
// hasil = ganjilGenap(executeCb);
// console.log(hasil);

// hasil = ganjilGenap(function () {
//   return pengurangan(8, 4);
// });
// console.log(hasil);

// ARRAY FUNCTION
let arr = [2, 1, 5, 3, 12, 45];
// array.forEach(callback) : untuk mengakses setiap data dan index pada array
for (const value of arr) {
  console.log(value);
}
arr.forEach((value, index) => {
  console.log(value);
  console.log(index);
});
let result = "";
arr.forEach((value, index) => {
  result += `${value} berada di index ${index}/n`;
});

console.log(result);

let newArr = ["BMW", "TOYOTA", "LEXUS"];
function duplicateForEach(callbackfn, dataArr) {
  // callbackfn : (value, index) => {
  //    console.log(value);
  //    console.log(index);
  // }
  // dataArr = newArr
  for (let index = 0; index < dataArr.length; index++) {
    let value = dataArr[index];
    callbackfn(value, index);
  }
}
duplicateForEach((value, index) => {
  console.log(value);
  console.log(index);
}, newArr);

// array.map(callback) : untuk mengakses data dan index pada array sekaligus menghasilkan array baru dengan data yang baru
let numArr = [1, 2, 3, 4, 5];
let newNumArr = numArr.map((valueMap, indexMap) => {
  console.log(valueMap);
  console.log(indexMap);
  const multiple = valueMap + 3;
  console.log(multiple);
  return multiple;
});

console.log(newNumArr);
function duplicateMap(callbackfn, dataArr) {
  let arr = [];
  for (let index = 0; index < dataArr.length; index++) {
    const value = dataArr[index];
    let newData = callbackfn(value, index);
    console.log(newData);
    arr.push(newData);
  }

  return arr;
}

let resultMap = duplicateMap((value, index) => {
  console.log(value);
  console.log(index);
  return `${index + 1}. ${value}`;
}, newArr);

console.log(resultMap);

// array.filter(callback) : untuk mengakses setiap data dan index dari suatu array sekaligus menghasilkan
// data array baru sesuai condition yang diberikan oleh callback functionnya.
let money = [1000, 500, 21000, 3000, 10000, 12000];

let newMoney = money.filter((val, idx) => {
  console.log(val);
  console.log(idx);
  return false;
});

console.log(newMoney);

function duplicateFilter(callbackfn, dataArr) {
  let arr = [];
  for (let index = 0; index < dataArr.length; index++) {
    let value = dataArr[index];
    console.log(value);
    let conditionResult = callbackfn(value, index);
    console.log(conditionResult);
    if (conditionResult === true) {
      arr.push(value);
    }
  }

  return arr;
}

let filterData = duplicateFilter((val, idx) => {
  console.log(val);
  console.log(idx);
  return val < 5000;
}, money);
console.log(filterData);
