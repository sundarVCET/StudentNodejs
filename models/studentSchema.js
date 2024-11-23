// models/student.js

class Student {
    // Define properties of the class (without using a constructor)
    id;
    rno;
    name;
    dept;
    year;
    dob;
    marks; // Marks will be an object like { tamil: 80, math: 90 }
    cgpa;
    grade;
}
  
// In-memory data storage
const studentsList = []
  
// Export the class so that it can be used in other files
module.exports = { Student, studentsList };
  