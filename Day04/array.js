// Array
/**
 * Definisi :
 * - Sebuah tipe data yang berisi sekumpulan data yang memiliki tipe sama atau berbeda-beda.
 * - Setiap data pada array memiliki index / alamat yg dimulai dari 0.
 *
 * Tujuan array untuk mempermudah pengelolaan data
 * Array bertipe object
 * Array ditandai dengan adanya symbol kurung siku [data1, data2,...]
 */
// NON ARRAY
let buahApel = "Apel";
let buahJeruk = "Jeruk";
let buahSemangka = "Semangka";

// ARRAY
// Cara 1
let buah = ["Apel", "Jeruk", "Semangka"];
console.log(buah);
// Cara 2
let stock = Array(10, 12, 30);
console.log(stock);
// Cara 3
let harga = [];
harga[0] = 20000;
harga[1] = 10000;
harga[2] = 16000;
console.log(harga);

// Cara mengakses data dari array : namaVariableArray[index_datanya]
// console.log(buah[1]);
// buah[1] = "Lemon";
// console.log(buah);
// console.log(buah[0] + " Stock " + stock[0] + " harganya " + harga[0]);

// Exercise
for (let index = 0; index < buah.length; index++) {
  console.log(
    `${index + 1}. Buah ${buah[index]}, stocknya ada ${
      stock[index]
    } dan harganya Rp. ${harga[index].toLocaleString("id")}`
  );
}

// ARRAY FUNCTION
// array.length : untuk mengetahui jumlah data pada array
// output dari func length adalah data number integer
console.log("Length buah :", buah.length);
console.log("Length stock :", stock.length);
console.log("Length harga :", typeof harga.length);
console.log("Last data buah :", buah[buah.length - 1]);

// array.push : untuk menambahkan data baru diakhir array
buah.push("Mangga");
stock.push(25);
harga.push(7500);
console.log(buah);
buah[buah.length] = "Melon";
console.log(buah);
// array.pop : untuk menghapus data index terakhir suatu array
buah.pop();
stock.pop();
harga.pop();
console.log(buah);

// array.unshift : untuk menambahkan data di awal array
buah.unshift("Mangga");
stock.unshift(25);
harga.unshift(7500);
console.log(buah);

// array.shift : untuk menghapus data index awal suatu array
buah.shift();
stock.shift();
harga.shift();
console.log(buah);

// array.splice : digunakan untuk mengelola data array
// array.splice(indexAwal, jumlahData, dataBaru);

// 1. Menghapus data pada index tertentu
buah.splice(1, 1); // menghapus mulai index 1 dengan jumlah 1 data
console.log(buah);

// 2. Menyisipkan data baru mulai index tertentu
buah.splice(2, 0, "Jeruk", "Lemon");
console.log(buah);

// 3. Mengganti data
buah.splice(1, 1, "Melon");
console.log(buah);

// array.indexOf : untuk mengetahui alamat suatu data
console.log(buah.indexOf("Jeruk"));
console.log(buah.indexOf("Kiwi"));

// array.slice : untuk mengambil sebagian data
console.log(buah.slice(1, 3));

// array.join : menggabungkan data array menjadi string
console.log(buah.join(""));

// array.reverse : untuk membalikkan urutan data
console.log(buah.reverse());

// array.sort : untuk mengurutkan data ascending atau descending
console.log(buah);
console.log(buah.sort());
let numbers = [12, 11, 2, 3, 1, 44, 52, 43];
console.log(numbers);
console.log(numbers.sort());
let numbersAsc = numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
let numbersDesc = numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbersDesc);

// IMMUTABLE dan MUTABLE
// IMMUTABLE : tipe data yang tidak bisa dirubah
const PI = 3.14;
console.log(PI);
const newPI = Math.round(PI);
console.log(PI);
console.log(newPI);

// MUTABLE : tipe data yang bisa berubah
const angka = [3, 46, 2, 1, 14, 7];
const newAngka = [...angka].reverse(); // spread operator untuk menyalin isi array
newAngka.push(1200);
console.log(angka);
console.log(newAngka);

//  for...of : digunakan untuk mengakses value suatu array
for (const value of buah) {
  console.log(value);
}
