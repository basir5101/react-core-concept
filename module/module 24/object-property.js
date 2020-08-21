const students = [
    {id: 21, name: 'Omar sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
];
// const studentName = [];
// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     const name = element.name;
//     studentName.push(name);
// }

const studentName = students.map ( s => s.name)
//console.log(studentName);
const studentId = students.map ( id => id.id);
//console.log(studentId)
const bigger = students.filter ( s => s.id > 40)
console.log(bigger);