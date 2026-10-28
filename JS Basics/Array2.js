let arr = [1, 2, 3, 4, 5];
arr.push(6); // Adding an element to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
arr.pop(); // Removing the last element from the array
console.log(arr);
arr.unshift(0); // Adding an element to the beginning of the array
console.log(arr); // Output: [0, 1, 2, 3, 4, 5]
arr.shift(); // Removing the first element from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]        
arr.splice(2, 1); // Removing the element at index 2
console.log(arr); // Output: [1, 2, 4, 5]
arr.splice(2, 0, 44); // Adding an element at index 2
console.log(arr); // Output: [1, 2, 44, 4, 5]