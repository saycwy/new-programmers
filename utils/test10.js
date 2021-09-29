/**
 * Maninuplating JSON Array
 */

/**
 * adding new items into an array
 */
let json_array_1 = []

const add_item_1 = (item) => {
  json_array_1.push(item);
}

// add_item_1('first string item');
// add_item_1('first string item');
// add_item_1('first string item');
add_item_1({ a: 1, b: 3 });
add_item_1({ a: 1, b: 3 });
json_array_1[0].b = 5;
json_array_1[1].a = 12;

// console.log(json_array_1[0]);
// console.log(json_array_1[1]);

/**
 * Adding new items with loop
 */

let json_array_2 = [];

const add_item_2 = (item) => { //simple function to add item
  json_array_2.push(item);
  json_array_2.push(item);
}

const add_item_count = (max) => { //simple loop to add item
  for (let i = 0; i < max; i++) {
    const _json = { a: i, b: i * 3 }
    add_item_2(_json)
  }
}

const modify_item_1 = (json_arr) => { //modify the json array with loop
  let _arr = []; //create new internal arr

  for (let i = 0; i < json_arr.length; i++) {
    let e = json_arr[i];
    
    //set value to new internal arr
    e.a = e.a * 2.5;
    _arr.push(e);
  }

  //return the value
  return _arr;
}

//run the command to add items
add_item_count(5);

//display result after 1 command
console.log('Result after 1st command');
console.log(json_array_2);

//run modify command to modify items
const _modified_arr = modify_item_1(json_array_2)

//display the result after 2nd command
console.log('Result after 2nd command');
console.log(_modified_arr);