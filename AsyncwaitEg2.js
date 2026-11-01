async function testresult(){
    return "pass";
}

testresult().then(function(results){console.log(results)})
testresult().then(function(results2){console.log(results2)})

async function runTest(){

try {
let results = await Promise.resolve("login test pass");
console.log(results);

let results2 = await Promise.reject("test clear");
console.log(results2);
} catch (error) {
console.log("Error:", error);
}
}

runTest();