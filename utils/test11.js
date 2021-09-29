/**
 * simple array manipulation
 */

let json;

json = [];

const add_items_to_array = (count) => {
  for (let i = 0; i < count; i++) {
    //build an json
    const _json = { a: i , b: i + 1 * 3 }
    json.push(_json)
  }
}

add_items_to_array(5);
console.log(json);