class Parents {
    constructor(){
        this.fatherName = 'Father';
    }
}

class Child extends Parents {
    constructor(name){
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}
const baby1 =new Child('Abdul');
const baby2 = new Child('Basir');
console.log(baby1);
console.log(baby2);