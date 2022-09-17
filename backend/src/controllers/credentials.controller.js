//creacion de objeto
const credentialsCtrl = {};

const Credential = require('../models/Credential');

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
    // const credential = await Credential.findById(req.params.id);
    // res.json(credential);
    debugger;
    let filter = parseFloat(req.params.id);
    const credential = await Credential.find({'id_tarjeta': filter});
    res.json(credential);

    // const credential = await Credential.findById(req.params.id);
    // res.json(credential);
};

credentialsCtrl.getCredentialByIdCard = async (req, res) => {        
    // const credential = await Credential.findById({"id_tarjeta": req.params.idTarjeta});
    // res.json(credential);
    // const credential = await Credential.findById(req.params.idTarjeta);
    // res.json(credential);
};

credentialsCtrl.updateCredential  = async (req, res) => {
    const { placa, id_tarjeta} = req.body;
    await Note.findOneAndUpdate(req.params.id, {
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