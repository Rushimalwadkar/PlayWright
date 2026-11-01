// var is function scoped and can be re-declared and updated.
var a = 10;
console.log(a);

function test() {
    var a = 20;
    console.log(a);
    if(true) {
        var a = 30;
        console.log(a);
    }
}
test();
console.log(a);

// let is block scoped and can be updated but cannot be re-declared.
let b = 10;
console.log(b);

function test1() {
    let b = 20;
    console.log(b);
}
test1();
console.log(b);

// const is block scoped and cannot be updated or re-declared.
const c = 10;
console.log(c);

function test2() {
    const c = 20;
    console.log(c);
}
test2();
console.log(c);

