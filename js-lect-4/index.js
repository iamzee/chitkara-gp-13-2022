
console.log(num);

function outer() {
    console.log(num1);

    function inner() {
        console.log('hello world');
    }

    var num1 = 50;
    inner();
}
var num = 50;
outer();