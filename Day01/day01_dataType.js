// STRING : untuk data huruf atau character
let namaToko = "Toko Olahraga\nJl. Olahraga"; // double quote
console.log(namaToko);
let nama_toko = "Toko Olahraga"; // single quote
let namatoko = `Toko Olahraga`;

let alamatToko = "Jl. Pemuda no 80-90, Surabaya";

let alamatLengkap = "Pak Edi" + " " + namatoko + " " + alamatToko; // penjumlahan string
console.log(alamatLengkap);
alamatLengkap = `Pak Eko ${namatoko} ${alamatToko}`; // backthick
console.log(alamatLengkap);

console.log(namatoko);

///////////////// FUNGSI BAWAAN PADA TIPE DATA STRING ////////////////////
let greeting = "Hello, welcome to js code";

// typeof : memriksa tipe data
console.log(typeof greeting);
console.log(typeof 12);

// string.length = menghitung panjang data string
console.log(greeting.length);

// string.indexOf("character") = mencari posisi suatu character
console.log(greeting.indexOf("o"));

// string.toLowerCase() = merubah semua character ke huruf kecil
console.log(greeting.toLowerCase());

// string.toUpperCase() = merubah semua character ke huruf besar
console.log(greeting.toUpperCase());

// string.charAt(index) = mencari huruf pada alamat yang dituju
console.log(greeting.charAt(1));

// string.includes("character") =  memastikan suatu kata ada pada value string yang dimiliki
console.log(greeting.includes("welcome"));

// string.slice(indexAwal, indexAkhir) = mengambil bagian character tertentu berdasarkan index awal hingga sebelum index akhir
console.log(greeting.slice(0, 5));

// NUMBER : data angka
let jarak = 1500; // Nilai INT/INTEGER
let berat = 90.25; // Nilai FLOAT atau desimal

// Arithmetic operator : +, -, *, /, %
let hasil = jarak - 500;
console.log(hasil);
hasil = jarak * 2;
console.log(hasil);

// Increment
// jarak = jarak + 1
jarak++;
console.log(jarak);
jarak++;
console.log(jarak);
jarak += 5;
console.log(jarak);
// Decrement
// jarak = jarak - 1
jarak--;
console.log(jarak);
jarak -= 5;
console.log(jarak);

///////////////////// MATH OBJECT //////////////////
const PI = Math.PI;
console.log(PI);

// Math.abs()
console.log(Math.abs(-25));
console.log(Math.abs(-24.7));
console.log(Math.abs(22));
console.log(Math.abs(2) * -1);

// Math.round(), Math.ceil(), Math.floor()
console.log(Math.round(2.5));
console.log(Math.round(2.4));
console.log(Math.ceil(2.1));
console.log(Math.ceil(2.8));
console.log(Math.floor(2.8));

// Parsing data
let angka = "321.456";

console.log(typeof angka);
console.log(typeof parseInt(angka));
console.log(typeof parseFloat(angka));

let price = 15000;

console.log(price.toString());
console.log(
  price.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  })
);

// memeriksa data apakah angka atau tidak
console.log(isNaN("A"));
console.log(isNaN(2));
console.log(isNaN("23"));

// BOOLEAN : memiliki dua nilai, TRUE atau FALSE
let benar = true;
let salah = false;

// Comparison Operator : >, <, >=, <=, ==, ===, !=
let angkaA = 20;
let angkaB = 15;
console.log(angkaA > angkaB);
console.log(`Comparison ${angkaA} < ${angkaB}`, angkaA < angkaB);
console.log(`Comparison ${angkaA} == ${angkaB}`, angkaA == angkaB);
console.log(`Comparison ${angkaA} != ${angkaB}`, angkaA != angkaB);
console.log(`Comparison ${angkaA} === ${"20"}`, angkaA === "20");
console.log(`Comparison ${angkaA} === ${20}`, angkaA === 20);

// Logical Operator : AND (&&), OR (||), NOT (!)
console.log("Logical AND :", true && true);
console.log("Logical AND :", true && false);
console.log("Logical AND :", false && false);
console.log("Logical AND :", false && true);

console.log(angkaA < angkaB && angkaA > angkaB);
console.log("Locgical OR :", true || true);
console.log("Locgical OR :", true || false);
console.log("Locgical OR :", false || false);
console.log("Locgical OR :", false || true);

console.log("Logical NOT", !benar);
console.log("Logical NOT", !salah);

///////////// OBJECT DATE //////////////
const date = new Date(); // Membuat instance dari class date
console.log(date.toLocaleString());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getTime());

// Buat program penjumlahan dua angka
// Example : numberA = 2, numberB = 5
// Output : 7

// INPUT
let numberA = 12;
let numberB = 5;
// PROCESS
let output = numberA + numberB;
// OUTPUT
console.log(output);
