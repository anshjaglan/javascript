//In the js we have mainly 2 type of datatype 
// 1.Primitive(call by value)
//2. Non-primitive(reference datatype)

//1.primitive
// const name = "Ansh"
// const age = 22
// const isPass = false
// const salary = null
// const bignumber = 4565827964579n
// let study;

// const cuid = Symbol(23250262) // symbol make the value unique in this cuid and curoll val is same but output is false due to use of Symbol
// const curoll = Symbol(23250262)



// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof isPass)
// console.log(typeof salary)
// console.log(typeof study)
// console.log(typeof bignumber)
// console.log(cuid === curoll) 

//2.non-primitive

const myname = ["ansh" ,"jaglan"];
let myobj1 = {

   name : "ANSH",
    myAge : 22
}

const myFunction = function sayHello(){
    console.log("Hello Function")
}
console.log(typeof myname)

console.log(typeof myFunction)
console.log(typeof myobj1)