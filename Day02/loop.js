// LOOP STATEMENT
/**
 * 1. WHILE LOOP : digunakan ketika akhir loop tidak pasti
 *
 * Aturan penulisan :
 * while(condition){
 *      // task
 * }
 * */
let value = 10;
let count = 0;
while (value > 0) {
  // console.log(value);
  count++;
  if (count > 5) {
    break;
  }
}

/**
 * 2. DO WHILE LOOP
 *  Aturan penulisan :
 * do{
 *    // task
 * } while(condition)
 *
 * */
count = 0;
do {
  count++;
  // console.log(count);
  if (count === 6) {
    break;
  }
} while (count < 10);

/**
 * 3. FOR LOOP : digunakan ketika kita tau batas loopingnya
 *
 * for(statement_1;statement_2;statement_3){
 *    // task
 * }
 *
 * statement_1 ; deklarasi variable yang mendefinisikan nilai awal dari batas loopnya
 * statement_2 : condition untuk memeriksa variable pada statement_1 dengan batas loopingnya, apakah bernilai true
 * statement_3 : berisi fungsi increment atau decrement terhadap statement_1
 * */

for (let value = 0; value < 5; value++) {
  // console.log(value);
}

let result = "";

for (let i = 1; i <= 4; i++) {
  if (i % 2 == 0) {
    result = result + `Kereta No. ${i} Genap\n`;
    console.log(result);
  } else {
    result = result + `Kereta No. ${i} Ganjil\n`;
    console.log(result);
  }
}

// OUTPUT
console.log(result);
