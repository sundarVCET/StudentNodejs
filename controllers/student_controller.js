const { Student, studentsList } = require('../models/studentSchema.js');


const addStudent = async (request, response) => {

    try {
        //const {id, rno, name, dept, year,dob,marks,cgpa,grade} = req.body
        //const student = new Student();
        //student.rno = rno; 
        //student.name = name;

       const existRno=new Date().getFullYear().toString().substr(2, 2)+request.body.rno
       console.log(existRno)
        const student = studentsList.find((s) => s.rno === existRno); // Search in the array

        if (!student) {    // If not present ,will add the student
            // Create a new student object with the provided data
            const newstudent = new Student();

            newstudent.id = Date.now(); // Unique ID based on timestamp
            newstudent.rno = new Date().getFullYear().toString().substr(2, 2)  + request.body.rno;
            newstudent.name = request.body.name;
            newstudent.year = request.body.year;
            newstudent.dept = request.body.dept;
            newstudent.dob = request.body.dob;
            // newstudent.marks = request.body.marks;
            // newstudent.cgpa = request.body.cgpa;
            // newstudent.grade = request.body.grade;
            console.log("newstudent", newstudent)

            // pushing the object to array
            studentsList.push(newstudent);


            return response.status(200).json({
                message: "student added successfully",
                newstudent
            });
        } else {
            return response.status(200).json({
                message:  'Student Already Exist' });
        }

    } catch (error) {
        return response.status(500).json(error);
    }


}
const getStudent = async (req, res) => {

    try {
        console.log("request received", req.params.num)
        const rno = req.params.rnum;
        const student = studentsList.find((s) => s.rno === rno); // Search in the array
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }


}

const updateStudent = async (req, res) => {

    try {
        const rno = req.params.rno;
        const student = studentsList.find((s) => s.rno === rno); // Search in the array
        if (student) {

            Object.assign(student, req.body); // Update properties
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }

    } catch (error) {
        res.status(500).json(error);
    }


}
const addMarkStudent = async (req, res) => {

    try {
        const rno = req.params.rno;
        const student = studentsList.find((s) => s.rno === rno); // Search in the array
        if (student) {
            student.marks = { ...student.marks, ...req.body.marks }; // Merge marks to that object
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    addStudent,
    addMarkStudent,
    getStudent,
    updateStudent
}