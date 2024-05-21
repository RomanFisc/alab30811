// const person = "John"
// let y = 7
// let x = 5

// console.log(person + y);

// if (x>y) {
//   console.log("X is bigger")
// } else {
//   console.log("Y is bigger")
// }
//greater than etc

const hello = "Hello, "
const greeting = "how are you?"
//console.log(hello.concat(greeting))
//concat

//onsole.log("Escape characters \"character\" example")
//escape characters

const a = 6
const b = 10
//console.log(`string literal example where the answer of a + b will be on a new line: 
//${a + b} `)
//string literal example

// Part 1 math problems
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable 
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for 
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(" ")
// console.log(isValid);

//adding checks
const div5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0
//checks if all numbers are divisible by 5
console.log(" ")
console.log("are all the numbers divisble by 5?:", div5)
const firstBigger = n1 > n4
// checks if the first number is bigger than the last
console.log(" ")
console.log("is the first number bigger than the last?:", firstBigger)

const mathChain = (((n1 - n2) * n3) % n4)
// follow the math chain
console.log(" ")
console.log("1st num substracted by 2nd num then multiplied by 3rd num and divided by 4th num to find remainer", mathChain);

const under25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log("all numbers under 25:", under25);
//checks to see if all numbers are under 25


//Part 2 practical math
//total distance 1500 miles
// 55mph 30 mpg
// 60mph 28 mpg
// 75mph 23 mpg
// fuel budget 175, $3 per gallon

// checking amount of gallons needed at each speed
const totalTrip = 1500
const mph55 = totalTrip / 30
console.log("total amount of gallons you need at 55mph:", mph55)
const mph60 = totalTrip / 28
console.log("Total gallons at 60mph:", mph60)
const mph75 = totalTrip / 23
console.log("Total gallons at 75mph:", mph75)

//checking if budget will cover at each speed
const budget55 = mph55 * 3
const budget60 = mph60 * 3
const budget75 = mph75 * 3


//telling thhe user if they meet the budget at each speed
if (budget55 < 175) {
  console.log("Congrats you are under budget and spent:", budget55)
} else {
  console.log("Oh no you are over budget and spent:", budget55)
}

if (budget60 < 175) {
  console.log("Congrats you are under budget and spent:", budget60)
} else {
  console.log("Oh no you are over budget and spent:", budget60)
}

if (budget75 < 175) {
  console.log("Congrats you are under budget and spent:", budget75)
} else {
  console.log("Oh no you are over budget and spent:", budget75)
}

//testing total speed
const speed55 = 1500 / 55
console.log("Total amount of hours:", speed55)

const speed60 = 1500 / 60
console.log("Total amount of hours:", speed60)

const speed75 = 1500 / 75
console.log(`Total amount of hours: ${speed75}`)

