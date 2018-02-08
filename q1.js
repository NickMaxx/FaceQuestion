var a = 100;
function fn() {
    console.log(a);   //undefined
    var a = 200;
    console.log(a);  // 200
}
fn();
console.log(a); //100
var a; 
console.log(a); //100
var a = 300;
console.log(a); //300

// ----------------------

var b = 1
var b

var c = 2
var c = 3
console.log(b) //1
console.log(c) //3

// --------------------------

