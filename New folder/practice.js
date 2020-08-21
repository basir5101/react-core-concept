/**
function leapYer(num){
        if(num < 100){
                if(num % 4 == 0){
                         return num +" is leap Year"
                }
                else{
                        return "This is not leap Year"
                }
        }
         else if( num >= 100){
                if( num % 100 != 0 && num % 4 == 0 || num % 400 == 0){
                        return "This is leap Year"
                }
                else{
                       return "This is not leap year"
                }
        }
        else{
                  return "Please input a value"
        }
};
var result = leapYer(4);
console.log(result);
*/
/** 
function factorial(n){
        var ans = 1;
        for( var i = 1; i <= n; i++){
                ans = ans * i;
        }
        return ans
}
var result = factorial(5);
console.log(result);
*/

/** 
function factorial (n) {
        if( n === 0 || n ===1){
                return 1;
        }
        else if( n < 0){
                return undefined;
        }
        else {
                return n * factorial(n -1 )
        }
}
var result = factorial (10);
console.log(result);
*/

/**  

function fibonacci(n){
        if( n==1){
                return [0, 1];
        }
        else 
        {
                var s = fibonacci( n - 1 );
                s.push(s[s.length - 1] + s[s.length - 2]);
                return s;
        }
}
console.log(fibonacci(8));
*/

/** 
function fibonacci (n){
        var fibo = [0, 1];
        for (var i = 2; i <= n; i++){
                fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        return fibo;
}
var result = fibonacci(10);
console.log(result);

function fibonacci(n){
        if(n==0){
                return 0;
        }
        else if( n==1){
                return 1;
        }
        else {
                return fibonacci(n-1) + fibonacci(n-2);
        }
}
 var result = fibonacci(10);
 console.log(result);


 //prime number
function prime(n){
        for(var i = 2; i < n ; i++){
                if( n % i == 0){
                        return "isn't prime number"
                }
        }
        return "prime Number"
};
var result = prime(15737);
console.log(result);
 */

 for(var i = 0; i < 10; i++){
       var number = Math.random() * 10;
       var result = number.round(number); 
       console.log(result);  
 }
