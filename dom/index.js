


// const el = document.getElementById('heading');
// console.log(el);

// el.style.color = 'red';
// el.style.backgroundColor = 'green';

// let arr = document.getElementsByTagName('h1');
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   arr[i].style.color = 'blue';
// }

// document.getElementsByClassName('someclass');

// document.querySelector('h1');
// document.querySelector('.h1');
// document.querySelector('#h1');
// document.querySelector('div > ul');
// document.querySelector('input[type="text"]')

// document.querySelectorAll('h1');

// let el = document.querySelector('p');

// console.log(el.innerText);
// console.log(el.textContent);
// console.log(el.innerHTML);

// el.innerText = 'Hello India';

// let el = document.querySelector('a');

// console.log(el.getAttribute('href'));

// el.setAttribute('href', 'http://fb.com');

// setInterval(function() {
//   console.log('Hello');
// }, 2000);

let arr = [
  'https://images.unsplash.com/photo-1662660810141-8faac6521f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1662700283619-c3432cb703c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1662488457906-9f9e41280cec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1662657835718-cf4bd772f1b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1662703936419-f24223f0ebd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
]

let img = document.querySelector('img');

let index = 0;

setInterval(function() {
  img.setAttribute('src', arr[index]);
  index = (index + 1) % arr.length;
}, 2000);