const express = require('express')
const router = express.Router()
const {
  getStudents,
  getStudentById
} = require('../controllers/StudentController.js')

router.get('/students', getStudents),
router.get('/student/:id', getStudentById)

module.exports = router
