let student={
    name:"Yash",
    age:23,
    college:"VESIT",
    duty:"CR",
    "what hobbies ":"blahalblahablahblah",
    address:{
        city:"Pune",
        state:"Maharashtra",
        village:{
            town:"Panchagni",
            area:"opp to National Public"
        }

    }

    
}

// console.log(student.name);
// console.log(student["what hobbies "]);

student.place="mumbai";
student["branch"]="ECS";
student.age=20;
delete student.duty;
// console.log(student);

// for (const key in student) {
//     console.log(`${key}:${student[key]}`);
    


// }

// console.log("age" in student);

console.log(student.address.village.town);











