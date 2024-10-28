// Use `.map()` to iterate over the following array:

// const nums = [13, 87, 2, 89, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

// const multipliedNums = nums.map((num) => {
//     return num * 2
// })

// console.log(multipliedNums)

// const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

// const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// // Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

// // Your code here

// const [firstTopping, secondTopping] = pizzaToppings

// console.log(firstTopping)
// console.log(secondTopping)

// console.log(pizzaToppings[0])
// console.log(pizzaToppings[1])

// const person = {
//     name: 'Alex',
//     role: 'Software Engineer',
//   }
  
//   // Object destructuring:
//   const { name, role } = person;
  
//   console.log(name) // 'Alex'
//   console.log(role) // 'Software Engineer'
  
  // Equivalent in traditional dot notation:
//   console.log(person.name) // 'Alex'
//   console.log(person.role) // 'Software Engineer'
  
  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   }
  
//   // Your code here
  
// const { make, model } = car

// console.log(make)
// console.log(model)

// console.log(car.make)
// console.log(car.model)

// const originalArray = [1, 2, 3];
// const duplicateArray = [...originalArray];

// console.log(duplicateArray); // [1, 2, 3]

// referenceArray.push(4) // Modifying referenceArray also modifies originalArray
// console.log(originalArray) // [1, 2, 3, 4]

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

// const controversialPizzaToppings = [...pizzaToppings]

// console.log(controversialPizzaToppings)

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  
//   const clonedObject = { ...car }

// clonedObject.model = 'q7'

// console.log('Clone: ', clonedObject)

// const fruitInventory = {
//     apples: 2,
//     oranges: 4,
//   };
  
//   const selectedFruit = 'apples'; // Variable as a dynamic key
//   const selectedFruitCount = fruitInventory[selectedFruit];
  
//   console.log(selectedFruitCount); // 2
  
//   const fruitType = 'bananas'; // Variable as a dynamic key

// const fruitInventory = {
//   [fruitType]: 5,
// };

// console.log(fruitInventory); // { bananas: 5 }

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

// const userProfile = {
//     userName: xokeesh,
//     friends: 24,
// }

const propertyName = 'blocked'

const blockedUsers = {
    [propertyName]: 4,
}

console.log(blockedUsers)