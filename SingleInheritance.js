class Animal{
    constructor(name){
        this.name = name;
    }
    eat (){
        console.log(this.name +" can eat");
    }
    sleep(){
        console.log(this.name + "can sleep")
    }

}
class Dog extends Animal {
    constructor(name , breed, color){
        super(name);
        this.breed = breed;
        this.color = color;
    }
}
let dog = new Dog("Bunny "," Lab "," black");
dog.sleep();
console.log("color of "+dog.name + " is "+ dog.color);