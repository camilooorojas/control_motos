//creacion de objeto
const studentsCtrl = {};

const Student = require('../models/Student');

studentsCtrl.getStudents = async (req, res) => {
    const students = await Student.find();
    res.json(students);
}

studentsCtrl.createStudent = async (req, res) => {
    const { cedula, codigo, nombre, apellido, credential } = req.body;
    const newStudent = new Student({
        cedula: cedula,
        codigo: codigo,
        nombre: nombre,
        apellido: apellido,
        credential: credential
    });
    await newStudent.save();
    res.json({message: 'Student saved'})
};

studentsCtrl.getStudent = async (req, res) => {        
    const student = await Student.find({'codigo': req.params.id});
    res.json(student);
};

studentsCtrl.updateStudent  = async (req, res) => {
    const { cedula, codigo, nombre, apellido, credential } = req.body;
    await Student.findByIdAndUpdate(req.params.id, {
        cedula,
        codigo,
        nombre,
        apellido,
        credential
    });
    res.json({title: 'Update Student'})
};

studentsCtrl.deleteStudent = async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    res.json({title: 'Delete Student'})
};

module.exports = studentsCtrl;