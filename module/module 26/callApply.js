const normalPerson = {
    firstName: 'Abdul',
    lastName: 'Basir',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary - amount - tax - tips;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000
}

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendChargeBill(20000);
// console.log(friendlyPerson.salary)

// normalPerson.chargeBill.call(heroPerson, 5000, 500, 50);
// console.log(heroPerson.salary);
// normalPerson.chargeBill.call(friendlyPerson, 6000, 600, 60);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.apply(heroPerson, [5000, 500, 50]);
// console.log(heroPerson.salary)
// normalPerson.chargeBill.apply(friendlyPerson, [6000, 600, 60]);
// console.log(friendlyPerson.salary);

//normalPerson.getFullName()
