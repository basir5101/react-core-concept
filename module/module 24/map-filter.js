const numbers = [3, 5, 9, 12, 54];
//const output = []


// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// function square (element){
//     return element * element;
// }

const output =  numbers.map(function(element, index, array){
 console.log(element, index, array);

});

// const output = numbers.map(x => x * x);

// const result = numbers.map(Array);
// console.log(result);

