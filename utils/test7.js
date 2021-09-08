/**
 * Conditional logic - Version 2
 */

let function_run_counter = 0;
let func_return_val

const assign_if = (colour) => {
  function_run_counter++
  // function_run_counter = function_run_counter + 1
  // function_run_counter += 1

  return (colour === 'purple') ? "YES" : "NO"
}

// let func_return_val = assign_if('white');
// let func_return_val

func_return_val = assign_if('white');

console.log(func_return_val);
console.log(func_return_val);
console.log(func_return_val);
console.log(func_return_val);
console.log(func_return_val);

func_return_val = assign_if('purple');

console.log(func_return_val);
console.log(func_return_val);
console.log(func_return_val);
console.log(func_return_val);
console.log(func_return_val);

// console.log(assign_if('red'));
// console.log(assign_if('red'));
// console.log(assign_if('red'));

console.log('Counter: ', function_run_counter);