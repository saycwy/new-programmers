let a = 1
let b = 3
let c = 7

// console.log(c);

const final_value = () => {
  c = a * b * c;
  return c;
}

const __c = final_value()
const ___c = __c + 1;

const _val = ___c * __c;

console.log(_val);