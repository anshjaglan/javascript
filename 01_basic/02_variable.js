const studentID = 23250262
const name = "Ansh Jaglan"
let section = "A"
let Rollno = 11
var branch = "CSE"
college = "COSC"
console.log("original : ", studentID , name , section, Rollno, branch, college)



section = "B"
Rollno = 28
branch = "AI"
console.log("updated : ", studentID , name , section, Rollno, branch, college)
console.table([studentID, name, section, Rollno, branch, college])