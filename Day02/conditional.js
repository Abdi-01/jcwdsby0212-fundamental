// Conditional Statement
/**
 * Jenis :
 * 1. IF STATEMENT : untuk 1 kondisi
 * 2. IF...ELSE STATEMENT : untuk 2 kondisi
 * 3. IF...ELSE IF...ELSE STATEMENT : untuk >=2 kondisi
 * 4. SWITCH...CASE STATEMENT : memastikan nilai yang diberikan sesuai dengan case yang ditentukan
 *
 * Aturan :
 * - Membutuhkan nilai Boolean
 * */

// 1. IF
/**
 * Aturan penulisan :
 * if(condition){
 *      // task
 * }
 * note :
 * - condition : kondisi yang diinginkan, harus bernilai BOOLEAN (COMPARISON OPERATOR / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task : tugas apa yang ingin dijalankan ketika condition terpenuhi
 */
// Example case : Memeriksa nilai yang diatas 0
// INPUT
const value = -2;
console.log(value > 0);
if (value > 0) {
  // task
  console.log("Value lebih dari 0");
}

// 2. IF...ELSE
/**
 * Aturan penulisan :
 * if(condition){
 *      // task
 * }else{
 *      // task
 * }
 * - condition : kondisi yang diinginkan, harus bernilai BOOLEAN (COMPARISON OPERATOR / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task : tugas apa yang ingin dijalankan ketika condition terpenuhi
 */
// Example case : Memeriksa batas usia pembuatan kartu SIM
const name = "lenoard";
const age = 10;
const email = "leo@mail.com";
if (age >= 17) {
  console.log(`Verifikasi usia ${name} berhasil, periksa email ${email} anda`);
} else {
  console.log(`Verifikasi usia ${name} gagal, masih dibawah umur`);
}

// 3. IF...ELSE IF...ELSE
/**
 * Aturan penulisan :
 * if(condition){
 *      // task
 * }else if(condition){
 *      // task
 * }else{
 *      // task
 * }
 * - condition : kondisi yang diinginkan, harus bernilai BOOLEAN (COMPARISON OPERATOR / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task : tugas apa yang ingin dijalankan ketika condition terpenuhi
 */
// Example case : Menentukan grade nilai ujian
const examValue = 79;

if (examValue > 90) {
  console.log("Grade A");
} else if (examValue >= 80 && examValue < 90) {
  console.log("Grade B");
} else if (examValue >= 70 && examValue < 80) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// TRUTHLY and FALSY
// TRUTHLY
console.log(Boolean("ABC"));
console.log(Boolean(12));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(true));

// FALSY
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// 4. SWITCH...CASE
const profesi = "Ninja";

switch (profesi) {
  case "Programmer":
    console.log("Butuh Laptop");
    break;
  case "Dokter":
    console.log("Butuh stetoskop");
    break;
  case "Driver":
    console.log("Butuh Mobil");
    break;
  default:
    console.log("Tidak diketahui");
    break;
}
