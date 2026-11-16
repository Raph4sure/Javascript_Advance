globalThis.prompt = require("prompt-sync")();

function doubleNumbers() {
    let array = [];
    const lengthOfArray = 5;

    while (array.length < lengthOfArray) {
        let nos = prompt("Enter the array: ");

        const arrayInt = parseInt(nos);

        parseInt(array.push(arrayInt));

        console.log(array);
    }

    const newArrays = array.map((newArray) => 
        newArray * 2);

    console.log("This is the new Array:", newArrays)
}

doubleNumbers();
