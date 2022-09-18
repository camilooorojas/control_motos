const { Router } = require('express');
const router = Router();

// importa metodo
const { getStudents, createStudent, getStudent, updateStudent, deleteStudent } = require('../controllers/students.controller');