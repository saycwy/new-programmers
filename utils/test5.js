/**
 * conditional logic
 */

const colour = 'Yellow'

const simple_if = (colour) => {
  let res = '';

  if (String(colour).toLowerCase() !== 'purple') {
    res = "No, it's not purple";
  } else {
    res = "Yes, it's purple"
  }

  return res;
}

const assign_if = (colour) => {
  return (colour === 'purple') ? "Yes" : "No"
}

const res_assign_if = assign_if('white');


const complex_if = (colour) => {
  let res = '';

  if (colour === 'purple') {
    res = 'You have PURPLE'
  } else if (colour === 'yellow') {
    res = 'You have YELLOW'
  } else if (colour === 'red') {
    res = 'You have RED'
  } else {
    res = 'Colour is not found!'
  }

  return res;
}

const complex_result = complex_if('red')
console.log(complex_result);