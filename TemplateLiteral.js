function greeting(name) {
    return `hello. ${name}`;
}

let string = greeting('Rushikesh');
console.log(string);

//2nd way to write template literal
const string2 =  function greeting2(name) {
    return `hello. ${name}`;
}
console.log(string2('Ganesh'));


//Arrow function with template literal
const greet = (name2) => `Hello, ${name2}`;
console.log(greet("Ganesh"));

let getResult = (score) => {
    if (score > 50) {
        return "pass";
    } else if (score < 40 && score > 30) {
        return "gradePass";
    } else {
        return "fail";
    }
};

console.log(getResult(60));
console.log(getResult(32));
console.log(getResult(21));

// 2nd example of arrow function with template literal
const APIstatus =  (statuscode)=>{ if (statuscode >=200 && statuscode<300) return "APISuccess"
    else if (statuscode >=400 && statuscode<500) return "APIClientError"
    else if (statuscode >=500 && statuscode<600) return "APIServerError"
    else return "APIUnknownError" 
} 

console.log(APIstatus(200));
console.log(APIstatus(404));
console.log(APIstatus(500));
console.log(APIstatus(700));