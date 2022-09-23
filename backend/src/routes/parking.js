const { Router } = require('express');
const router = Router();

// importa metodo
const { getAllParkingInside, getAllParkingOutSide, createParking, getParking, updateParking, deleteParking,getParkingOut } = require('../controllers/parking.controller');

router.route('/')
    .get(getAllParkingInside)
    .post(createParking)

router.route('/outside/')
    .get(getAllParkingOutSide)

router.route('/:id')
    //.get((req, res) => res.send('ACA SI IMPRIMO '+ typeof(req.params.id)))   
    .get(getParking)
    .put(updateParking)
    .delete(deleteParking)

router.route('/:code/:inside')
    .get(getParkingOut)

module.exports = router;