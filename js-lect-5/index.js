let person = {
  username: 'Messi',
  bio: function() {
    return `My name is ${this.username}`
  }
}

console.log(person.username); // Messi
console.log(person.bio()); // My name is Messi
console.log(person.firstName); // undefined
// console.log(person.getDesc()); // ERROR
console.log(person.toString()); // [object Object]

// ------------------
let arr = [1, 2, 3, 4];
arr.push(5);

console.log(arr);

// ----------------------------
// constructor functions

function user(firstName) {
  this.username = firstName;
  this.bio = function() {
    console.log('My name is something');
  }
}

const user1 = new user('Messi');
console.log(user1);
const user2 = new user('Ronaldo');
console.log(user2);

/*
 TODO constructor function
 title -> string
 completed -> boolean
 markCompleted -> completed = true
*/

// function Todo(title, completed) {
//   this.title = title;
//   this.completed = completed;
//   this.markCompleted = function() {
//     this.completed = true;
//   }
// }

class Todo {
  constructor(title, completed) {
    this.title = title;
    this.completed = completed;
    this.markCompleted = function() {
      this.completed = true;
    }
  }
}
class StudentTodo extends Todo {
  constructor(title, completed, rollNo) {
    super(title, completed);
    this.rollNo = rollNo;
  }
}

const student = new StudentTodo('Buy grioceries', false, 20);
/*
{
  title: 'Buy groceries',
  completed: false
}
*/

// --------------------------------
// ARROW FUNCTIONS

function greeting1() {
  console.log('Hello world1');
}
greeting1();

let greeting2 = function() {
  console.log('Hello world2')
}
greeting2();

// ARROW FUNCITON
let greeting3 = () => {
  console.log('Hello world3');
}

greeting3();

let sum = (num1, num2) => {
  return num1 + num2;
}

let sum2 = (num1, num2) =>  num1 + num2;

console.log(sum(2, 3));



