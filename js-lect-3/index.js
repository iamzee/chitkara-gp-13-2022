// // // // // // // // // // let password;
// // // // // // // // // console.log(password);

// // // // // // // // let email;

// // // // // // // // email = 'abc@xyz.com';

// // // // // // // // if (email === undefined) {
// // // // // // // //     console.log('Email not provided');
// // // // // // // // } else {
// // // // // // // //     console.log(email);
// // // // // // // // }

// // // // // // // function greeting(firstName) {
// // // // // // //     console.log(`Hello ${firstName}`);
// // // // // // // }

// // // // // // // greeting();
// // // // // // // function sum(num1, num2) {
// // // // // // //     // return num1 + num2;
// // // // // // // }

// // // // // // // let res = sum(1, 2);
// // // // // // // console.log(res);


// // // // // // let email = 'abc@xyz.com';
// // // // // // console.log(email);

// // // // // // email = null;
// // // // // // console.log(email);

// // // // // function gradeCal(marks = 0) {
// // // // //     if (marks > 90) {
// // // // //         return 'A';
// // // // //     } else if (marks === undefined) {
// // // // //         return 'Z';
// // // // //     }
// // // // // }

// // // // // console.log(gradeCal(100));
// // // // // console.log(gradeCal());

// // // // let note1 = {
// // // //     title: 'First note',
// // // //     description: 'My first note',
// // // //     createdAt: 10,
// // // //     published: false
// // // // }

// // // // console.log(note1);

// // // let todo1 = {
// // //     title: "Prepare for NALR",
// // //     completed: 'never',
// // //     createdAt: 10
// // // }
// // // console.log(todo1.title);
// // // todo1.title = 'Dont prepare for NALR';

// // // console.log(todo1.title);

// // let marks = {
// //     nalr: -40,
// //     pa: 16,
// //     fnd: 39,
// //     total: function() {
// //         console.log(this);
// //         let res = this.nalr + this.pa + this.fnd;
// //         return res;
// //     }
// // };

// // console.log(marks.nalr); // -40
// // console.log(marks.total());


// let password = '      hel lo          ';
// console.log(password.length);
// console.log(password.toUpperCase());
// console.log(password.toLowerCase());
// console.log(password.trim());

// let todo1 = {
//     title: 'Buy groceries',
//     completed: false,
//     markCompleted: function() {
//         this.completed = true;
//     }
// }

// let something;
// if (5 > 10) {
//     something = 'title';
// } else {
//     something = 'completed';
// }
// console.log(todo1.something);
// console.log(todo1[something]);

// console.log(todo1['title']);

// todo1.markCompleted();
// console.log(todo1.completed);

// ---------------------------------------

// Arrays

// let arr = [1, 'Zeeshan', false, 2, 5.6, true];

// arr[2] = 'Hello';

// console.log(arr);

// Todo app ---------

// let todos = [{
//     title: 'Buy groceries',
//     completed: true
// }, {
//     title: 'Prepare for viva',
//     completed: false
// }];

// console.log(todos[0].title);
// console.log(todos[0]['title']);

// Array properties and methods

let num = ['Messi', 'Ronaldo', 'Neymar'];
console.log(num.length); // 3

// Add item to the array (at the back)
num.push('Zlatan');

// Add item to the array (at front);
num.unshift('Xavi');

// remove value from last
let removedValue = num.pop();

num.shift();

console.log(num.length); // 5

console.log(num);

let stringify = num.join('-');

console.log(stringify);

function join(separator = ',') {

}

let todos = [];
let todo1 = {
    title: 'Buy groceries',
    completed: false
}
todos.push(todo1);

console.log(todos);

// -----------------
// Loops

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let names = ['Messi', 'Ronaldo', 'Neymar'];

for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}`);
}

// for of

for (let name of names) {
    console.log(name);
}

let marks = {
    pa: 16,
    nalr: -100,
    fed: 39
}
// for in loop

for (let key in marks) {
    console.log(`${key} -> ${marks[key]}`);
}

// pa -> 16
// nalr -> -100
// fed -> 39

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log(i);
        break;
    }
    console.log('Hello');
}