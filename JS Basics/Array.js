let fruits = ["apple", "banana", "orange"];
console.log("Fruits in the array:"+fruits.at(-2)); // Accessing the first element using at() method
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "banana") {
        continue; // Skip the rest of the loop for "banana"
    }
    console.log(fruits[i]);
}