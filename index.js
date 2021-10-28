// Import stylesheets
import './style.css';

let btn = document.querySelector('#btn');
let input = document.querySelector('#input');
let outputDiv = document.querySelector('#error');

let noOfAttempts = 3;

btn.addEventListener('click', () => {
  if (input.value.includes('!')) {
    outputDiv.innerText = 'Login successfull';
  } else {
    outputDiv.innerText = 'Password must contain !';
    noOfAttempts--;
    outputDiv.innerHTML = `you have ${noOfAttempts} attempts remaining!`;
    if (noOfAttempts === 0) {
      input.disabled = true;
    }
  }
});
