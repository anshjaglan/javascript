let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toUTCString())


// for any specific date

let myCreatedDate = new Date(2026, 0, 26,10 , 50, 53)
console.log(myCreatedDate.toString())

// for time
let myTimeStamp = Date.now()
console.log(myTimeStamp )
console.log(myCreatedDate.getTime())
console.log(myDate.getTime())


// this all time in ms for converting it to sec it is divided by 1000;

console.log(Math.floor((myTimeStamp)/1000))
myCreatedDate.toLocaleString('default', {

})
console.log(myCreatedDate)