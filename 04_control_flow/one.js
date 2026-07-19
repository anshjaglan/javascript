const isLoggedInUser = true;

if(isLoggedInUser){
    console.log("User Logged in Successfully")
}

const temperature = 64

if(temperature >= 50){
    console.log("Be alert");
    console.log("Temperature is too high")
} else{
    console.log("Temperature is less than 50 degree")
}


const isUserFromCollege = true;
const isUserFromCse = true;

if(isUserFromCollege && isUserFromCse){
    console.log("This student is from CSE branch of our college")
} 

if(isUserFromCollege || isUserFromCse){
    console.log("he is  a student")
}
