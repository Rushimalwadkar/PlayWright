abstract class animal{
    abstract makesound(): void;

    eat() :void {
        console.log("Animal eating");
    }
}

class dog extends animal{
    makesound(): void {
        console.log("Dog barks");
    }
}
 let call = new dog();
 call.makesound();
 call.eat();
    