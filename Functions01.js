//param and return function eg

function WhatIsyourName(name) { 
    console.log("Given " + name);
if (name !== "Rushikesh") {
    return console.log("this is incorrect my name ");
}
}
let name1 = "Ram";
WhatIsyourName(name1);

//non parameter function eg

function nonparameter() {
  console.log("this is function without parameter");
}
let callfunction = nonparameter();
console.log(callfunction);
 
//parameter and non return function eg

function PaaramerterNonReturn(a,b) {
    console.log("addtion of given numbers is " +(a+b))
}

let arr = [1,3];
PaaramerterNonReturn(...arr);

//parameter and non return function eg2

function greeting(nameofPerson){
  console.log("Hi I am "+nameofPerson);
}
greeting("Rushikesh");
greeting("Suresh");
greeting("Ganesh");
greeting("Ramesh");

//No parameter and return function
function NoparaFunction(){
    console.log("Open Browser");
    return "Browser Opened";
}
let result= NoparaFunction();
console.log(result);
