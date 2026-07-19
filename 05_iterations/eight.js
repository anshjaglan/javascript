const myNums = [1,2,3,4]

// const newNums = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc}, and current Value : ${currval}`)
//     return acc + currval;
// }, 0)

const newNums = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(newNums)

const shoppingCart = [
    {
        itemName : "ASUS Vivobook 15",
        itemPrice : 89000
    },
    {
        itemName : "Mouse",
        itemPrice : 999
    },
    {
        itemName : "Keyboard",
        itemPrice : 14999
    },
    {
        itemName : "Laptop Bag",
        itemPrice : 1200
    },
    {
        itemName : "Laptop Cover",
        itemPrice : 1500
    },
    {
        itemName : "Headphones",
        itemPrice : 13000
    },
    {
        itemName : "Mobile",
        itemPrice : 76000
    }
]

const moneyToPay = shoppingCart.reduce( (acc, item) => acc + item.itemPrice, 0 )
console.log(moneyToPay)