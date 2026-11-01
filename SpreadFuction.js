/*function add(a,b,c) {
    return a + b + c;
}
let arr =[1,2,3];
console.log(add(...arr)); */

// Eg2
function Errorcode(...code){
    return code.every((code)=>code <400);
}
let result = Errorcode(200,300,350,100);
console.log(result);