const { Router } = require('express');
const router = Router();

// importa metodo
const { getCredentials, createCredential, getCredential, updateCredential, deleteCredential, getCredentialByIdCard } = require('../controllers/credentials.controller');

router.route('/')
    .get(getCredentials)
    .post(createCredential)

router.route('/:id')
    //.get((req, res) => res.send('ACA SI IMPRIMO '+ typeof(req.params.id)))    
    .get(getCredential)
    .put(updateCredential)
    .delete(deleteCredential)

router.route('/:idTarjeta')
    .get(getCredentialByIdCard)


module.exports = router;