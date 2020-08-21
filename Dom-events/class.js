class Student {
    constructor(sId, sName){
        this.name = sName;
        this.id = sId;
        this.school = 'BSMRSTU';
    }
}

const student1 = new Student(40, 'Abdul Basir');
const student2 = new Student(41, 'Nishu');
console.log(student1, student2);