function createStudentProfile(name, age, grade) {
  // Return an object with name, age, and grade

  if (
    typeof name === "string" &&
    typeof age === "number" &&
    age > 5 &&
    typeof grade === "string"
  ) {
    return (object = {
      name: name,
      age: age,
      grade: grade,
    });
  } else {
    console.log("Invalid input");
  } 
}

console.log(createStudentProfile('yash',3,'10th'));
