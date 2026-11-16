// globalThis.prompt = require("prompt-sync")();

const combineAndMax = (...num) => {
    const maxNum = Math.max(...num);
    return maxNum;
};

const findMaxNum = combineAndMax(5, 10, 2, 8, 45, 12);

console.log(findMaxNum);
