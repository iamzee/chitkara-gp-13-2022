// // // let score = 50;

// // // if (score > 20 || attendance > 80) {
// // //   console.log('pass');
// // // }


// // // function name() {}

// // // let name = function() {}

// // // let name = () => {}

// // // let obj ={
// // //   username: 'Hello',
// // //   bio: function() {
// // //     console.log(this.username);
// // //   }
// // // }

// // // console.log(obj.username); // Hello
// // // obj.bio(); // Hello

// // // let arr = [1, 'Hello', function() {}, { username: 'Hello'}, [23, 4]];

// // // let a = 10;
// // // let b = a;
// // // b = 50;

// // // console.log(a);
// // // console.log(b);

// // // let x = {
// // //   username: 'Messi'
// // // }

// // // let y = x;

// // // y.username = 'Ronaldo';

// // // console.log(x.username);
// // // console.log(y.username);

// // // let a = 10;
// // // let a = 40;
// // // console.log(a);

// // const obj = {
// //   username: 'messi'
// // }

// // obj.username = 'ronaldo'
// // console.log(obj);

// // var a = 40;

// // function greeting() {
// //   console.log('Hello world');
// // }

// // greeting();
// // console.log(a);

// // outer();
// // function outer() {
// //   inner();
// //   var a = 40;
// //   function inner() {
// //     console.log(a);
// //   }
// // }


// // console.log(a);
// // console.log(b);
// // console.log(c);
// // var a = 40;
// // let b = 50;
// // const c = 90;

// // let x = 10;

// // if (x < 40) {
// //   let y = 60;
// // }

// // console.log(y);

// // function outer() {
// //   var num = 40;
// //   function inner() {
// //     console.log(num);
// //   }
// //   return inner;
// // }

// // var fn = outer();
// // fn();

// // console.log('one');
// // setTimeout(function() {
// //   console.log('Hello');
// // }, 4000);
// // setTimeout(function() {
// //   console.log('World');
// // }, 2000);
// // console.log('two');

// // setTimeout(function() {
// //   console.log('Hello');
// // }, 2000);

// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i)
//   }, 4000);
// }

function greeting(arg) {
  arg.push(50);
}

let num = [10];
greeting(num);
console.log(num.length);