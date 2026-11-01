function placeorder(ItemTorder, callback){
    console.log("placeorder called");
    callback();
}
placeorder("pizza",function(){
    console.log("order placed");
});

placeorder("burger",()=>{
    console.log("burger order placed");
});


function test (tst, whendone){
    console.log("start case");
    whendone();
}

test("verify login page", ()=>{
    console.log("login verified");
});