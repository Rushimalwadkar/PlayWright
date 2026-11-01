class person {
    #child1;
    #child2;

    constructor(name1, name2){
        this.#child1=name1;
        this.#child2=name2;
     }
      getchild1() {
        return this.child1;
    }

    getchild2(){
        return this.#child2;
    }
       setchild1 (changeName1){
        this.child1=changeName1;
    }
     setchild2 (changeName2){
        this.child1=changeName2;
    }
    }

 
let N=new person("Ram","Sham");
console.log(N.getchild1(Ram));
   