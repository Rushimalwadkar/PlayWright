function gene <T> (result : T) :T{
    return result;
}

console.log(gene<string>("Hello I am Rushi"));
console.log(gene<Number>(343));
console.log(gene<boolean>(true));
