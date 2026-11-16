// let str1 = "Hel",
//     str2 = "lo";
// console.log(str1 + " " + str2);

// // Output: Hello

// let score = 20;

// switch (true) {
//     case score < 10:
//         console.log("worst");
//         break;

//     case score === 10:
//         console.log("Too low");
//         break;
//     case score === 20:
//         console.log("very low");
//         break;

//     case score === 30:
//         console.log("low");
//         break;

//     case score === 40:
//         console.log("ok");
//         break;

//     case score === 50:
//         console.log("You tried");
//         break;

//     default:
//         console.log("Perfect");
// }

// let sum = 0;
// const n = 100

// for (let i = 0; i <= n ; i++) {
//     sum += i;
// }

// console.log(`Sum of numbers is ${sum}`);

// const fruits = ["orange", "banana", "apple" ]

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// let i = 0

// while (i < 5) {
//     console.log(i)
//     i++

// }

// let i = 5

// do {
//     console.log(i)
//     i--
// } while (i > 0);

// let sum = 0,
//     num = 0;

// do {
//     // add all positive numbers
//     sum += num;

//     // take input from the user
//     num = parseInt(prompt("Enter a number: "));

//     // loop terminates if num is negative
// } while (num >= 0);

// // last, display sum
// console.log(`The sum is ${sum}`);


// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";

// const rl = readline.createInterface({ input, output });

// let sum = 0;
// let num = 0;

// do {
//     // Add positive numbers (skips adding `num` on the first iteration since num = 0)
//     sum += num;

//     // Take input from the terminal asynchronously
//     const answer = await rl.question("Enter a number: ");
//     num = parseInt(answer, 10);

//     // Loop terminates if num is negative
// } while (num >= 0);

// console.log(`The sum is ${sum}`);
// rl.close();


function Person () {
  this.name = "Raphael",
    this.age = 25;
};

const person1 = new Person()

console.log(person1.name)
console.log(person1.age)



