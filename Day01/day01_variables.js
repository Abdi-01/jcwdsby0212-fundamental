// Variable : Penampung data

/**
 * susunan variable ==> keywordVariable namaVariable = nilaiVariable ;
 *
 * keywordVariable : var, let dan const.
 *
 * namaVariable : harus diawali dengan huruf atau symbol "_" / symbol "$"
 *
 * nilaiVariable : berdasarkan tipe data ==> string, number, boolean, array dan object
 */

//  keyword var : Redeclare, Reassign
var nama = "Abdi"; // deklarasi variable : tahap pertama ketika membuat / mendefinisikan variable.
var nama = "Edo"; // Redeclare
nama = "Zidane"; // Reassign

// console.log(nilai_yang_ingin_dilihat) : menampilkan nilai ke terminal
console.log(nama);

// keyword let : Non-Redeclare, Reassign
let usia = 30;
// let usia = 25;
console.log(usia);
usia = 18;

console.log(usia);
// deklarasi
let job;
console.log(job);

// keyword const : Non-Redeclare, Non-Reassign
const PI = 3.14;
// const PI = 22;
// PI = 22;

///////////// ATURAN PENULISAN VARIABLE ////////////////
// 1. HARUS DIAWALI HURUF
// let 1nama; wrong
let pekerjaan;
var address = "Surabaya";

//  2. BOLEH DIAWALI DENGAN SYMBOL ( _ atau $)
let _telp;
let $fax = "03214o576";

// 3. VARIABLE YANG TERDIRI DARI >= 2 SUKU KATA
let fullNameUser = "Edo"; // camelCase
let first_name_user = "Edi"; // snake_case
let lastname = "Ade";
// let nama-produk; wrong
// let nama produk; wrong

//  Keybord shortcut
// ctrl + s = save file
// ctrl + / = create comment
// ctrl + f = find code
// ctrl + ` = buka terminal
// ctrl + alt + f = merapikan program
