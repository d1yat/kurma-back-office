const express = require('express')
const router = express.Router()
const students = require('../students.db.js')

const getStudents = (req, res) => {
  res.json({
    status: 'success',
    code: 200,
    data: students
  })
}

const getStudentById = async (req, res) => {
  let { id } = req.params
  id = parseInt(id ?? 0)
  const index = await students.findIndex(it => it.id === id)

  if (index !== -1) {
    return res.json({
      status: 'success',
      code: 200,
      data: students[index]
    })
  }

  return res.json({
    status: 'NOT_FOUND',
    code: 404,
    data: 'No record found'
  })

}

module.exports = {
  getStudents,
  getStudentById
}
