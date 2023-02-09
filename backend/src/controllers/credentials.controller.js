//creacion de objeto
const credentialsCtrl = {};

const Credential = require('../models/Credential');
const Student = require('../models/Student');

credentialsCtrl.getCredentials = async (req, res) => {
    const credentials = await Credential.find();
    res.json(credentials);
}

credentialsCtrl.createCredential = async (req, res) => {
    const { placa, id_tarjeta } = req.body;
    const newCredential = new Credential({
        placa: placa,
        id_tarjeta: id_tarjeta,        
    });
    await newCredential.save();
    res.json({message: 'Credential saved'})
};

credentialsCtrl.getCredential = async (req, res) => {
    debugger;
    let filter = parseFloat(req.params.id);
    const credential = await Credential.findById(req.params.id);
    res.json(credential);
};

credentialsCtrl.getCredentialByTarjeta = async (req, res) => {
    const credential = await Credential.find({'id_tarjeta': req.params.tarjeta});
    res.json(credential);
};

credentialsCtrl.updateCredential  = async (req, res) => {
    const { placa, id_tarjeta} = req.body;
    await Credential.findByIdAndUpdate(req.params.id, {
        placa,
        id_tarjeta,       
    });
    res.json({title: 'Update Credential'})
};

credentialsCtrl.deleteCredential = async (req, res) => {
    const credential = await Credential.findByIdAndDelete(req.params.id);
    res.json({title: 'Delete Credential'})
};

module.exports = credentialsCtrl;