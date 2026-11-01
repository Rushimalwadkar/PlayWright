class Overload{
    add (a, b){
        return a-b;
    }
    add(a,b,c){
        return a+b+c;
    }
}

class second extends Overload{
    constructor(){
        super();
    }
}

let s = new second();
console.log(s.add(10,10,20));
