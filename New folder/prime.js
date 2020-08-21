function isPrime (n){
    var  n = 139;
    for(var i = 2; i<n; i++){
    if(n%i == 0){
        return "Not a prime Number";
        break;
    }
}
return 'prime'
}
var result = isPrime(128);
console.log(result);