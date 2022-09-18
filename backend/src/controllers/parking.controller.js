//creacion de objeto
const parkingCtrl = {};

const Parking = require('../models/Parking');

parkingCtrl.getAllParking = async (req, res) => {
    const parking = await Parking.find();
    res.json(parking);
}

parkingCtrl.createParking = async (req, res) => {
    const { student, credential, inside} = req.body;
    const newParking = new Parking({
        student: student,
        credential: credential,
        inside: inside
    });
    await newParking.save();
    res.json({message: 'Parking saved'})
};

parkingCtrl.getParking = async (req, res) => {        
    const parking = await Parking.find({'codigo': req.params.id});
    res.json(parking);
};

parkingCtrl.updateParking  = async (req, res) => {
    const { student, credential, inside} = req.body;
    await Parking.findByIdAndUpdate(req.params.id, {
        student,
        credential,
        inside
    });
    res.json({title: 'Update Parking'})
};

parkingCtrl.deleteParking = async (req, res) => {
    const parking = await Parking.findByIdAndDelete(req.params.id);
    res.json({title: 'Delete Parking'})
};

module.exports = parkingCtrl;