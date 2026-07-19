// function sayMyName() {
//     console.log("ANSH JAGLAN")
// }

// sayMyName()



// function addTwoNumber(num1, num2) {
//     let result = num1 + num2
//     return result
// }
// const result = addTwoNumber(3, 4)
// console.log(result)

// function multiply(num1, num2) {
//     let result = num1 * num2
//     return result
// }

// const result = multiply(20, 5)
// console.log("Result : " , result)

function isLoggedIn(username) {
    if(!username){
        console.log("Please enter username");
        return 


    }
    return `${username} just logged in`
}
console.log(isLoggedIn("ansh"))