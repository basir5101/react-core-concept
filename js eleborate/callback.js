function explain_callback(name, age, task){
    console.log("hello", name);
    console.log("Your age is", age);
    task()
}
explain_callback("sogir uddin",  17, washHand);
explain_callback("Mugir uddin", 21, takeShower);


function washHand(){
    console.log("Wash Hand")
}

function takeShower(){
    console.log('take shower');
}