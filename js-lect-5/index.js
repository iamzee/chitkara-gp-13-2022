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