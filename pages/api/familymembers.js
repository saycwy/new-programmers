
export default function handler(req, res) {
  res.status(200).json(generateFamilyMembers());
}

//generate random no for rows of data
const generateFamilyMembers = () => {
  //get a random no between 0 and 99
  const _random_no = Math.floor(Math.random() * 100);
  let familyMembersArray = [];

  //build the array
  for (let i = 0; i < _random_no; i++) {
    const family = { name: 'Joan Daly ' + i };
    familyMembersArray.push(family);
  }

  //return the new array
  return familyMembersArray;
}