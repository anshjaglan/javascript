const boys_names = ["Ansh", "Vansh", "Vishal", "Yash"]
const girls_names = ["Echchha", "Anshika", "Anjali", "Vanshika"]

// console.log(boys_names.push(girls_names))
// const co_names = boys_names.concat(girls_names)
// console.log(co_names)

const all_names = [...boys_names, ...girls_names]
console.log(all_names)

const arr1 = [1,2,3,4,[5,6,7,8,9,[10,11,12,[13,14,15],16,17]]]
const real_arr1 = arr1.flat(Infinity)
console.log(real_arr1)

const arr2 = "ANSH"
console.log(Array.isArray(arr2))
const arr3 = "ANSH"
console.log(Array.from(arr3))

let num1 = 100
let num2 = 200
let num3 = 50

console.log(Array.of(num1, num2, num3))