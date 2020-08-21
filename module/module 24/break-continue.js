const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < number.length; i++){
    if(number[i]< 5){
        continue;
    }

    // if(number[i] > 5){
    //     break;
    // }
    console.log(number[i]);

}

console.log(knowing);
var knowing = "ik";

function doSomething(x, y = 4){
    console.log(y);
}
doSomething(3,2);