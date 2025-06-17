/////// Object to JSON ///////
const student = {
    name: 'Adib',
    age: 21,
    level: 'BSc'
};
const studentJson = JSON.stringify(student);
console.log(studentJson);

/////// JSON to Object ///////
const studentObj = JSON.parse(studentJson);
console.log(studentObj);

/////// Simple fetch ///////
const link = "https://jsonplaceholder.typicode.com/todos/1";
fetch(link)
    .then(res => res.json())
    .then(data => console.log(data))

/////// Smart fetch ///////
async function loadData() {
    const res = await fetch(link);
    const data = await res.json();
    console.log(data);
}

/////// Object's Keys ///////
const keys = Object.keys(studentObj);
const values = Object.values(studentObj);
console.log(keys, values);