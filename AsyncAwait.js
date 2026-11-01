function openBrower(){
    return new Promise(function (resolve){
        resolve("Browser Open ");
    });
}
function logincrediencal(){
    return new Promise (function (resolve){
        resolve("login");
    })
    
}async function RunFlows(parms) {
    let msg1 = await openBrower();
    console.log("Step1 :", msg1);
     let msg2 = await logincrediencal();'[ll['
    console.log("Step1 :", msg2);
    
}

RunFlows();