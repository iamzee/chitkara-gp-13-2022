

// const heading = document.createElement('h1');
// heading.innerText = 'hello world';

// const div = document.querySelector('div');

// // div.appendChild(heading);
// // div.append(heading);
// // div.prepend(heading);


// const h1 = document.querySelector('h1');
// h1.remove();

// function greeting() {
//   console.log('hello');
// }

// let btn = document.querySelector('button');

// btn.onclick = function() {
//   console.log('hello');
// }

// btn.addEventListener('click', function() {
//   console.log('hello');
// });

// btn.addEventListener('click', function() {
//   console.log('world');
// });

// btn.onclick = function() {
//   console.log('hello');
// }

// btn.onclick = function() {
//   console.log('world');
// }


// ====================
// let btn = document.querySelector('button');
// let body = document.querySelector('body');

// btn.addEventListener('click', function() {
//   body.style.backgroundColor = 'red';
// })

// let el = document.querySelector('input');
// const h1 = document.querySelector('h1');

// el.addEventListener('input', function(event) {
//   h1.innerText = event.target.value;
// })

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('form submitted');
})


