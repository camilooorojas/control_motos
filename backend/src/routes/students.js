const { Router } = require('express');
const router = Router();

// importa metodo
const { getStudents, createStudent, getStudent, updateStudent, deleteStudent } = require('../controllers/students.controller');

router.route('/')
    .get(getStudents)
    .post(createStudent)

router.route('/:id')
    //.get((req, res) => res.send('ACA SI IMPRIMO '+ typeof(req.params.id)))   
    .get(getStudent)
    .put(updateStudent)
    .delete(deleteStudent)

module.exports = router;