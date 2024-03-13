// Task 1: Function Argument Expansion
// Define the sum function
function sum(a, b, c) {
    return a + b + c;
}

// Create an array of numbers
const numbers = [2, 4, 6];

// Call the sum function using spread syntax
const result = sum(...numbers);

// Print the result to the console
console.log(result); // Output: 12
console.log()

// Task 2: Merging Arrays
// Create arrays array1 and array2
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merge array1 and array2 into mergedArray
const mergedArray = [...array1, ...array2];

// Print mergedArray to the console
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
console.log()

// Task 3: Array Element Insertion
// Create an array of colors
const colors = ['red', 'green', 'blue'];

// Create extendedColors array with additional colors using spread syntax
const extendedColors = ['yellow', ...colors, 'purple'];

// Print extendedColors to the console
console.log(extendedColors); // Output: ['yellow', 'red', 'green', 'blue', 'purple']
console.log()

// Task 4: Cloning and Modifying an Object
// Define the person object
const person = { name: 'John', age: 30 };

// Create a clone of the person object using spread syntax
const newPerson = { ...person };

// Modify the newPerson object
newPerson.name = 'Jane';
newPerson.gender = 'female';

// Print both person and newPerson to verify
console.log(person);    // Output: { name: 'John', age: 30 }
console.log(newPerson); // Output: { name: 'Jane', age: 30, gender: 'female' }
console.log()

// Task 5: Combining Objects
// Create objects object1 and object2
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

// Combine object1 and object2 into combinedObject
const combinedObject = { ...object1, ...object2 };

// Print combinedObject to verify
console.log(combinedObject); // Output: { a: 1, b: 3, c: 4 }
console.log()

// new comment





