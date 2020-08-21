// var a = 7;
// var b = 5;
// console.log("Before swap a = ", a, "b = ", b );
// var temp = a;
// a = b;
// b = temp;
// console.log("After swap a = ", a, "b = ", b );

var x = 5;
var y = 7;
var x = x + y;
var y = x - y;
var x = x - y;
// console.log("After swap x = ",x , "y = ",y );

p = 5;
q = 7;

[p, q] = [q, p];

console.log("After swap p = ", p, "q = ", q )