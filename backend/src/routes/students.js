const { Router } = require('express');
const router = Router();

// importa metodo
const { getAllParking, createParking, getParking, updateParking, deleteParking } = require('../controllers/parking.controller');

router.route('/')
    .get(getAllParking)
    .post(createParking)

router.route('/:id')
    //.get((req, res) => res.send('ACA SI IMPRIMO '+ typeof(req.params.id)))   
    .get(getParking)
    .put(updateParking)
    .delete(deleteParking)

module.exports = router;