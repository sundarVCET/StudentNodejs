const router = require('express').Router();

const studentController = require('../controllers/student_controller.js')


router.post('/add/student', studentController.addStudent)
router.get('/get/student/:rnum',studentController.getStudent)
router.post('/addmarks/student/:rno', studentController.addMarkStudent)
router.put('/update/student/:rno', studentController.updateStudent)



module.exports = router;  // Export the router to use in app.js

