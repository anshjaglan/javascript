const mySym = Symbol("key1") // define symbol

const jsUser = { // creating object
    Name : "ANSH",
    age : 20,
    location : "Roorkee",
    email : "ansh@gmail.com " ,
    "full Name" : "Ansh Jaglan" ,

    [mySym] : "myKey1"
}

//Object.freeze(jsUser) // freeze code

jsUser.email = "ansh@coer.com"
console.log(jsUser.Name) // use for calling functiobn values

console.log(jsUser[mySym]) // square bracket uses for symbol and values like full name
console.log(typeof mySym) // find type
console.log(jsUser.email)

// Add function to object

jsUser.greetings = function(){
    console.log("hello sir")
}
console.log(jsUser.greetings())

jsUser.greetingstwo = function(){
    console.log(`hello , ${this.Name}`)
}

console.log(`Hello , ${this.Name}`)