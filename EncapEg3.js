class Bank{
    Name;
    address;
    #balance
    constructor(name , add , bal){
        this.Name=name;
        this.address = add;
        this.#balance = bal;
    }
    getinfoOfcust(){
            return this.#balance=this.#balance;
    }
    getBalance(){
        return this.#balance;
    }
    setinfo(name1 , add , bala){
        this.Name = name1;
        this.address = add;
        this.#balance = bala;

    }
}
 let HDFC = new Bank("Rushi", "Kangaon",1000);

console.log("Customer Name is " + HDFC.Name + " Address is " + HDFC.address + " Balance is " + HDFC.getinfoOfcust());