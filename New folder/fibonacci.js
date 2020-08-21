
// function fibonacci (n){
//     var fibo = [0, 1];
//     for( var i = 2; i <=n; i++){
//         fibo[i] = fibo[i-1] + fibo[i -2];
//     }
//     return fibo;
  
// }
// var result = fibonacci(10);
// console.log(result);

// fibonacci with recursive function

// function fibonacci(n){
//     if (n == 0){
//         return 0;
//     } else if (n == 1){
//         return 1;
//     }
//     else{
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }
// console.log(fibonacci(10));

// fibonacci series recursive

function fibonacci(n){
    if(n==0){
        return[0]
    }
    else if (n==1){
        return[0, 1]
    }
    else{
        //calculate array with nth element
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci(10);
console.log(result);