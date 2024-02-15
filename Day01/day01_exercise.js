// Soal No 5 Slide 1
// Problem : Write a code to get difference between dates in days.
// INPUT : date1 = 2023-04-02, date2 = 2023-05-02
const date1 = new Date("2023-04-02");
const date2 = new Date("2023-05-02");

// PROSES
const different = Math.abs(date1.getTime() - date2.getTime());
console.log(different);
console.log(24 * 60 * 60 * 1000);
const totalDays = different / (24 * 60 * 60 * 1000);
console.log(totalDays);

// OUTPUT
console.log(
  `Range ${date1.toLocaleString()} and ${date2.toLocaleString()} is ${totalDays} days`
);

// Problem : Write a code to convert days to years, months and days.
// INPUT : daysAmount = 400
const daysAmount = 370;

// PROSES
//  1 year = 365 days, 1 month = 30 days, 1 days = 1 days
const year = Math.floor(daysAmount / 365);
console.log("Check year :", year);
const dayLeft = daysAmount % 365;
console.log("Check dayLeft :", dayLeft);
const month = Math.floor(dayLeft / 30);
console.log("Check month :", month);
const days = dayLeft % 30;
console.log("Check days :", days);

// OUTPUT
console.log(`${year} year, ${month} month, ${days} days`);
