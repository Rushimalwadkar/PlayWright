
class Car {
    #engine;
    constructor(name ,engineName){
        this.name =name;
        this.#engine=engineName;
    }
    getcar(){
        return this.#engine;
    }
    setcar(nameofEng){
        this.engineName=nameofEng;
    }  
}

let tesla = new Car("Tesla","V8");
console.log("car Name is " +tesla.name +" Engine is "+ tesla.getcar());
let tesla2 = new Car("BMW M5","V6");
console.log("car Name is " +tesla2.name +" Engine is "+ tesla2.getcar());
