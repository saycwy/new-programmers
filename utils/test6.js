/**
 * Looping logic
 */

var counter = 0;

const simple_forloop = (apa_value_put_boleh) => {
  for (let index = 0; index < apa_value_put_boleh; index++) {
    console.log("Current index: ", index, " Value: ", index * 20000);
  }
};

const arr = [1, 3, 5, 7, 9];

const array_forloop = () => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index] * 100;

    if (element > 500) break;

    console.log("Value: ", element);
  }
};

const json_arry = [
  {
    GUID: "100",
    firstname: "Say",
    lastname: "Kian",
    pets: ["dog", "cat", "snake"],
  },
  {
    GUID: "200",
    firstname: "Chen",
    lastname: "Huat",
    pets: ["lion", "elephant"],
  },
  { 
    GUID: "300", 
    firstname: "Wai", 
    lastname: "Mohd", 
    pets: ["dog"] 
  },
  {
    GUID: "400",
    firstname: "Tan",
    lastname: "Azlan",
    pets: ["cat", "coronavirus bat"],
  },
];

let new_json_arry = [];

const complex_array_forloop = () => {
  for (let index = 0; index < json_arry.length; index++) {
    const element = json_arry[index];

    // console.log('Full Name: ', element.firstname + ' ' + element.lastname);
    // console.log(`Full Name: ${element.firstname} ${element.lastname}, GUID: ${element.GUID}`);
    // console.log(`Full Name: ${element.firstname} ${element.lastname}, Pet_count: ${element.pets.length}`);

    // console.log(element.pets);

    //get the pets
    for (let _i = 0; _i < element.pets.length; _i++) {
      const _cat = element.pets[_i];

      console.log("now looking at pet: ", _cat);

      if (_cat === "lion") {
        console.log(`${element.firstname} has a ${_cat}`);
        new_json_arry.push(element);
      }
    }
  }
};

complex_array_forloop();
console.log(new_json_arry);

// array_forloop();

// console.log(arr[4]);

// array_forloop();
