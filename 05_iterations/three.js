// const numbers = [1,2,3,4,5,6,7,8,9]

// for(num of numbers){
//     console.log(`values in the numbers : ${num}`)
// }

// const greetings = "Hello world!";

// for(greet of greetings){
//     console.log(`every single char of greeting is : ${greet}`)
// }

//Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('UK', "United Kingdom")

// console.log(map)

for(const [key , values ]of map){
    console.log(key,":-",  values)
}

