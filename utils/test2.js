var orang = {name: "Say Chen Wai", age: 33}; //json
var retString = "My name is: ${orange.name}" + orang.name + ", and I am " + (orang.age + 2) + " years old.";
var retString2 = `My name is ${"MR. " + orang.name}, and I am ${orang.age + 2} years old.`;

console.log(retString);