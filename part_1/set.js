// // perform difference operation
// // elements of set a that are not in set b
// function difference(setA, setB) {
//     let differenceSet = new Set(setA);
//     for (let i of setB) {
//         differenceSet.delete(i);
//     }
//     return differenceSet;
// }

// // two sets of fruits
// let setA = new Set(["apple", "mango", "orange"]);
// let setB = new Set(["grapes", "apple", "banana"]);

// let result = difference(setA, setB);

// console.log(result);
// console.log([...result])
// console.log(Array.from(result))

const arrValue = ["one", "two", "three"];

// destructuring assignment in arrays
const [x, , z] = arrValue;

console.log(x); // one
// console.log(y); // two
console.log(z); // three
