function stopWatch(){
    let count = 0;
    return function(){
        count++
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1);
console.log(clock1());
console.log(clock1());
const clock2 = stopWatch();
console.log(clock2());

//when we return a function inside a function. its create a closure environment 
// if we change the name of declaration variable it will consider as new declaration of function

