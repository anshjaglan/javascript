const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    py : 'python'
}

// for (const key in myObject){
//     console.log(`${key} shortcut is for : ${myObject[key]}`);
// }



const programming = ["js", "cpp", "java", "c", "py"]
for (const key in programming){
    console.log(programming[key]);
}
