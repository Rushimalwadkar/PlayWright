async function fetchdata(a: string): Promise<any> {
    let Response = await fetch(a);
    return Response;
}
let a = await fetchdata("abc");
console.log(a);