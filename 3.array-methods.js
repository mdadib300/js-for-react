// Array Map
const products = [
    {name:'AE Denim', type: 'Denim Pant', price: 1700},
    {name:'Aeropostale', type: 'Twill Pant', price: 1200},
    {name:'Amazon', type: 'Shorts', price: 700},
    {name:'CK', type: 'Boxer', price: 150}
];
// Array Map is used when we need return from the array

const prices = products.map(product => product.price);
console.log(prices);

// Array forEach
products.forEach(product => console.log(product.price));
// Array forEach is used when we don't need return from the array

// Array filter (Will return an array of the elements which matches the condition)
const cheap = products.filter(product => product.price < 1000);
console.log(cheap);

// Array find (Similar to filter, but it will only return the first one which matches)
const firstCheap = products.find(product => product.price < 800);
console.log(firstCheap);

//// for of & for in
// for of will be used in array like object
// for in will be used in loop on an object