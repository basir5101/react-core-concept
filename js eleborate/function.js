function evenify(num){
    var result;
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num * 2;
    }
    return result
}
var result = evenify(25);
var squre = result * result
console.log(squre);


function evenify_all(nums){
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        even_array.push(result);  
    } 
    return even_array;
}

var nums = [5, 12, 89, 45, 18, 8];
var num_even = evenify_all(nums);
console.log(num_even);
// //evenify_all(nums);



// var friendAge = [ 22, 21, 23, 24, 19];
// //evenify_all(friendAge);