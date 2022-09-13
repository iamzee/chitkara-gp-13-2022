


// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//   console.log('hello');
// })

// btn.onclick = function() {
//   console.log('hello');
// }

// btn.onclick = function() {
//   console.log('hello');
// }


// let input = document.querySelector('input');
// let h1 = document.createElement('h1');

// let body = document.querySelector('body');

// body.appendChild(h1);

// input.addEventListener('input', function(event) {
//   h1.innerText = event.target.value;
// });

let form = document.querySelector('form');
let input = document.querySelectorAll('input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('form submitted');

  for (let i = 0; i < input.length; i++) {
    console.log(input[i].value);
  }
})