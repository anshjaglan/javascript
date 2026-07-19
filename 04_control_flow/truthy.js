const userEmail = []

if(userEmail){
    console.log("Got user's email id");
    
}

// falsy values
// false, 0, -0, BigInt 0n, null, undefined, NaN


// truthy values

// All valuse except falsy values and some specials is : "0", "false", " ", [], {}, function(){}


if(userEmail.length === 0){
    console.log("Array is Empty");

}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish  Coalescing Operator (??) : null undefined

let val1;
// val1 = 56 ?? 20 ?? 98;
val1 = null ?? 20;
val1 = null ?? undefined ?? 98;

console.log(val1);

// Terniary Operator

const collegeFees = 1000000;

collegeFees <= 1500000 ? console.log("Fees is less than 1500000" ) : console.log("Fees is more than 1500000");