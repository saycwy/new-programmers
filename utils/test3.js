// ------- json style
let person = { name: '', age: 0 };  //json

const fill_value = (_name, _age) => {
  person.name = _name;
  person.age = _age;
}

fill_value('Person A', 40 + 2);
fill_value('Person A', 40);

console.log(person);
person = { name: '', age: 0 };

console.log(person);


// ----- normal style
// let person_name = "";
// let age = 0;
// const fill_value = (_name, _age) => {
//   person_name = _name;
//   age = _age
// }

// fill_value('Person A', 40 + 2);
// fill_value('Person A', 40);

// console.log(`Name: ${person_name}, Age: ${age}`);