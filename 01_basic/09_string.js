const name = "Ansh"
const lastName = "Jaglan"

// console.log(name + lastName)

console.log(`My name is ${name} and last name is ${lastName}`)
// console.log(name.length + lastName.length)
console.log(name.charAt(2))
console.log(lastName.indexOf('J'))
console.log()

const newString = name +" " + lastName
console.log(newString)
console.log(newString.split(" "))

const newStringOne = "      Ansh Jaglan                  "
console.log(newStringOne)
console.log(newStringOne.trim())

const Email  = "anshjaglan-2005-shamli"
console.log(Email.replace('-', '/'))

console.log(Email.includes('Ansh'))
console.log(Email.split('a'))