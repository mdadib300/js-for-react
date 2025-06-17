/////// Array Destructuring ///////
const arrei = [12,87,92];
// To destructure it, we will use array like variable
const [a, b, c] = [12, 87, 92];
// or you can directly place the array name. "const [a, b, c] = arrei;"
console.log(c);

/////// Object Destructuring ///////
const student = {
    name: 'Adib',
    age: 21,
    level: 'BSc'
};
const {name, level, age, income} = student;
// Serial doesn't matter in object, but does in array
console.log(age);
console.log(income);

/////// Optional Chaining ///////
const employee = {
    name: 'Sadikul Islam',
    age: 25,
    education: {
        ssc: 'Passed',
        hsc: 'Passed',
        ba: 'Passed',
        life: 'Passing'
    },
    wives: 1
};

const ma = employee?.education?.ma;
console.log(ma);
