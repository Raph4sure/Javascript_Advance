const timeNow = new Date();
console.log(timeNow);

const date = new Date("2026-07-03");
console.log(date);

const date2 = new Date("1 Jul 2020");
console.log(date2);

const time1 = new Date(2020, 11, 20, 4, 12, 11, 0);
console.log(time1);

const timeInMilliseconds = Date.now();
console.log(timeInMilliseconds);

const time = new Date();
const date3 = time.getDate();
console.log(date3);


const currentDate = new Date();
const date4 = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

// show in specific format
// let monthDateYear = (month+1) + '/' + date4 + '/' + year;
let monthDateYear = `${month+1}/${date4}/${year}`;

console.log(monthDateYear); // 7/3/2020