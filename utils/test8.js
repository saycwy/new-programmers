

let abc = 'good afternoon!'
// abc = 'good morning!'

const def = (param) => { // const here is used to create a new function
  if (param === true) {
    console.log('def is running...');
  } else {
    console.log('def is not running...');
  }

  // return 'goodnight'
  // return abc;

  abc = 'totally confused!';
}

def(true);
// console.log(def());
// const xyz = def(true) //----> this will return a value then store inside xyz;

const xyz = abc  //const here is used to declare a variable

console.log(xyz);  //console log is used to display value of variable or a function that returns a value