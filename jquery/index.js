// document.querySelectorAll('h1');
// $('h1');

// DOM way -----------------
// let arr = document.querySelectorAll('h1');
// for (let el of arr) {
//   el.style.color = 'red';
// }


// jquery way --------------------
// $('h1').css('color', 'red');

// DOM way -------------
// let p = document.querySelector('p');
// console.log(p.textContent);

// jquery -----
// console.log($('p').text())

// DOM ------------
// let p = document.querySelector('p');
// p.textContent = 'Hello India';

// jQuery
// $('p').text('Hello India');

// DOM
let a = document.querySelector('a');
console.log(a.getAttribute('href'));
a.setAttribute('href', 'fb.com');

// jquery
$('a').attr('href', 'fb.com');
