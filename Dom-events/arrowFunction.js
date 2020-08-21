// function doubleIt(num){
//     return num * 2;
// }

const doubleIt = (num) => num * 2;
const multiple = (x, y) => x * y;

const result = doubleIt(5);
console.log(result);
const result2 = multiple(5, 7);
console.log(result2);

const calculation = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
var calculate = calculation(7,5);
console.log(calculate);