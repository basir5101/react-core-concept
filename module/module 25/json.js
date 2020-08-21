// JSON ==  javascript object Notetion

const user = {
    id: 45,
    name: 'Abdul Basir',
    girlfriend: {
        name: 'Anonymus',
        age: 0
    },
    luckyNumbers: [23, 34, 32, 222]
};
const userJSON = JSON.stringify(user);
console.log(userJSON);

const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);