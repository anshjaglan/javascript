// for loop 

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     // console.log(`Outer loop value is :   ${element}`);
//     console.log(`table of :   ${element}`);
//     for(let j = 1; j <= 10; j++){
//         console.log( i + ' * ' + j + ' = ' + i*j )
//     }
// }


// for loop for array

// let myArr = ['ANSH', 'JAGLAN', 'ANSH']
// for(let i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }

// break

// for(let i = 1; i <= 20; i++){
//     if( i == 10){
//         console.log(`10 detected`);
//         break;
//     }
//     console.log(i);
// }

// continue
for(let i = 1; i <= 20; i++){
    if( i == 10){
        console.log(`10 detected`);
        continue;
    }
    console.log(i);
}