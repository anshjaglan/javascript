const course = {
    courseName : "JAVASCRIPT",
    coursePrice : "1000",
    courseInstructor : "ANSH JAGLAN"
}

// now diconstruct
// here courseInstructor change into teacher and courseName = Subject 

const{courseInstructor : teacher, courseName : Subject} = course;

console.log(teacher, Subject);

