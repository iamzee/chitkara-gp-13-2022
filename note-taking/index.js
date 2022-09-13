

let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('ul');

btn.addEventListener('click', function() {
  //create li element
  let li = document.createElement('li');

  // change text of li
  li.innerText = input.value;

  // append li to ul
  list.appendChild(li);

  // clear input field
  input.value = '';

  li.addEventListener('click', function() {
    li.remove();
  })

})