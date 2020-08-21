const ages = [12, 13, 14, 15];
const ages2 = [16, 17, 18, 19];
const ages3 = [20, 21, 22, 23, 25];
// spread operator
const allAges = [...ages, ...ages2, ...ages3, 5];
const maximum = Math.max(...allAges);
console.log(maximum);