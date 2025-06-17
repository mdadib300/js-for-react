// ----- 1. let and const -----
// the value of let can be changed
let age = 18;
age = 19;
// the value of const won't be changed
const sex = 'Female';

// ----- 2. Conditions, Multiple Conditions, If Else -----
// Conditions - <, >, ===, !==, <=, >=
// Multiple condition connector - &&, || (And, Or)
if(4===4 && 5===5){
    console.log('You have said the truth!');
}
else if(4<=4 || 5===5){
    console.log('It is also true.');
}
else{
    console.log('False.');
}

// ----- 3. Array -----
// Declaration
const arr = [1,2,3,4,8,6,5];
// Index
console.log(arr[2]);
// Change value using index
arr[2] = 1200;
console.log(arr);
// Length
console.log(arr.length);
// Push
arr.push(1500);
console.log(arr);

// ----- 4. Loop -----
// A simple for loop to print 0 to 5
for(let i=0; i<6; i++){
    console.log(i);
}

// ----- 5. Simple Function -----
// A simple function to add two numbers
function add(number1, number2){
    return number1+number2;
}
console.log(add(5,10));

// ----- 6. Object -----
// A simple object containing various data types, array and another object
const student = {
    name: 'Adib Chowdhury',
    roll: 230313,
    courses: ['EEE', 'CSE', 'PHY', 'MATH', 'GED'],
    address: {
        city: 'Dhaka',
        postcode: 1311
    },
    regular: true
}
// Destructuring an object
// Print the value of 'roll'
console.log(student.roll);
// or,
console.log(student['roll']);
// or, 
const studentRoll = 'roll';
console.log(student[studentRoll]);
// Print the value of third course taken by the student
console.log(student.courses[2]);

// ----- 7. Template String (Backtick) -----
const season = 'Rainy';
const hours = 2;
console.log(`In this ${season} season, it is raining for ${hours} hours.`);

// ----- 8. Arrow Function -----
// A simple arrow function to return nothing logical
const nothing = () => 'nothing logical';
console.log(nothing());
// Arrow function with parameters and valid return
const summation = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
console.log(summation(2,2));

// ----- 9. Spread Operator -----
// It is used to make a copy of an array
const arr1 = [12,58,65,89,45];
const newArr = [...arr1];
console.log(arr1);
console.log(newArr);
// Copy and modify
const newArr2 = [...arr1, 56];
console.log(newArr2);

