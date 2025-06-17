// To check truthy //
let age = 21;
if(age){
    console.log('Truthy');
}
else{
    console.log('Falsy');
}

// To check falsy //
let money = 0;
if(!money){
    console.log('Falsy');
}
else{
    console.log('Truthy');
}

// Ternary Operator //
// Condition ? if true : if false
(5>2) ? console.log('YES') : console.log('NO');

// Calling a function according to condition //
const isTrue = false;
const displayMe = () => console.log('Display Me');
const hideMe = () => console.log('Hide Me');
isTrue ? displayMe() : hideMe();

// Number to String //
const sells = 5000;
console.log(sells); 
console.log(sells+'');

// String to Number //
const discount = '300';
console.log(discount);
console.log(+discount);


