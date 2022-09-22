//creacion de objeto
const parkingCtrl = {};

const Parking = require('../models/Parking');

// parkingCtrl.getAllParking = async (req, res) => {
//     const parking = await Parking.find();
//     res.json(parking);
// }

parkingCtrl.getAllParkingInside = async (req, res) => {
    const parking = await Parking.find({'inside': 1});
    res.json(parking);
}

parkingCtrl.getAllParkingOutSide = async (req, res) => {
    const parking = await Parking.find({'inside': 0});
    res.json(parking);
}

parkingCtrl.createParking = async (req, res) => {
    const { cedula, codigo, nombre, apellido, placa, id_tarjeta, inside} = req.body;
    const newParking = new Parking({
        cedula: cedula,
        codigo: codigo,
        nombre: nombre,
        apellido: apellido,
        placa, placa,
        id_tarjeta: id_tarjeta,
        inside: inside
    });
    await newParking.save();
    res.json({message: 'Parking saved'})
};

// parkingCtrl.getParking = async (req, res) => {        
//     const parking = await Parking.find({'codigo': req.params.id});
//     res.json(parking);
// };

parkingCtrl.getParking = async (req, res) => {        
    const parking = await Parking.find({'codigo': req.params.id});
    res.json(parking);
};

parkingCtrl.updateParking  = async (req, res) => {
    const { cedula, codigo, nombre, apellido, placa, id_tarjeta, inside} = req.body;
    await Parking.findByIdAndUpdate(req.params.id, {
        cedula,
        codigo,
        nombre,
        apellido,
        placa,
        id_tarjeta,
        inside
    });
    res.json({title: 'Update Parking'})
};

parkingCtrl.deleteParking = async (req, res) => {
    const parking = await Parking.findByIdAndDelete(req.params.id);
    res.json({title: 'Delete Parking'})
};

module.exports = parkingCtrl;