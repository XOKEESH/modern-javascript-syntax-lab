// Use `.map()` to iterate over the following array:

// const nums = [13, 87, 2, 89, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

// const multipliedNums = nums.map((num) => {
//     return num * 2
// })

// console.log(multipliedNums)

const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

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

const person = {
    name: 'Alex',
    role: 'Software Engineer',
  }
  
  // Object destructuring:
  const { name, role } = person;
  
//   console.log(name) // 'Alex'
//   console.log(role) // 'Software Engineer'
  
  // Equivalent in traditional dot notation:
//   console.log(person.name) // 'Alex'
//   console.log(person.role) // 'Software Engineer'
  
  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  }
  
  // Your code here
  
const { make, model } = car

// console.log(make)
// console.log(model)

// console.log(car.make)
// console.log(car.model)

// const originalArray = [1, 2, 3];
// const duplicateArray = [...originalArray];

// console.log(duplicateArray); // [1, 2, 3]

// referenceArray.push(4) // Modifying referenceArray also modifies originalArray
// console.log(originalArray) // [1, 2, 3, 4]

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

const controversialPizzaToppings = [...pizzaToppings]

console.log(controversialPizzaToppings)