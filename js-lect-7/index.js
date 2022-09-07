

// // greeting();

// // function greeting() {
// //   setTimeout(function() {
// //     console.log('Hello world');
// //   }, 0);
// // }

// // console.log('one');


// CALLBACK HELL =========================================================
// function step1(fn) {
//   setTimeout(function() {
//     console.log('User selecting image....');
//     fn('image.jpg');
//   }, 4000);
// }

// function step2(str, fn) {
//   setTimeout(function() {
//     console.log(`Adding filter ${str}`);
//     fn();
//   }, 2000);
// }

// function step3(fn) {
//   setTimeout(function() {
//     console.log('Adding caption to filtered image')
//     fn();
//   }, 3000);
// }

// function step4() {
//   setTimeout(function() {
//     console.log('Uploading image...');
//   }, 2000);
// }

// step1(function(str) {
//   step2(str, function() {
//     step3(function() {
//       step4();
//     });
//   });
// });
// ================================================================


// PROMISES ==================================================

let step1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject();
  }, 4000);
});

step1.then(function(num) {
  console.log(num);
}, function() {
  console.log('error occurred');
})




