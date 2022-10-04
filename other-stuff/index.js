let arr = [1, 2, 3, 4];

let arr2 = [10, ...arr, 20];
// let arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i]);
// }

arr2.push(5);

console.log(arr);
console.log(arr2);


let obj1 = {
  username: 'Coding blocks'
}

let obj2 = {
  ...obj1,
  firstName: 'Lionel',
  username: 'Coding'
};
// let obj2 = {};

// for (let key in obj1) {
//   obj2[key] = obj1[key];
// }

// obj2.username = 'Messi';

// console.log(obj1);
// console.log(obj2);

// destructuring--------------

let obj = {
  firstName: 'Coding',
  lastName: 'Blocks',
  username: 'cb'
}

// let firstName = obj.firstName;
let { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

let array = [1, 2, 3, 4];

// let firstElement = array[0];
let [first, second, third] = array;
// let first = array[0];
// let second = array[1];
// let third = array[2];

console.log(first);