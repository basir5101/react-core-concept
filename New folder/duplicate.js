var name = [3, 2, 3, 2, 5,9, 6, 4, 5, 23, 25, 23];
var uniqueName = [];

for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
    else{
        console.log("dada da ")
    }
}
console.log(uniqueName);