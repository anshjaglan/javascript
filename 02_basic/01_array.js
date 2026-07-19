const Arr1 = [1,2,3,4,]
console.log("A " + Arr1)
console.log(Arr1.join())
Arr1.push(10)
console.log(Arr1)
Arr1.pop()
console.log(Arr1)
Arr1.unshift(8)
console.log(Arr1)
Arr1.shift(Arr1)
console.log(Arr1)
console.log(Arr1.includes(10))
console.log(Arr1.indexOf(4))


console.log(Arr1.slice(1,2))
console.log("B " + Arr1)
console.log(Arr1.splice(1,2))
console.log("C " + Arr1)
