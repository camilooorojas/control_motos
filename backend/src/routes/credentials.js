const { Router } = require('express');
const router = Router();

// importa metodo
const { getCredentials, createCredential, getCredential, updateCredential, deleteCredential, getCredentialByTarjeta } = require('../controllers/credentials.controller');

router.route('/')
    .get(getCredentials)
    .post(createCredential)

router.route('/:id')
    .get(getCredential)
    .put(updateCredential)
    .delete(deleteCredential)

router.route('/tarjeta/:tarjeta')
    .get(getCredentialByTarjeta)


module.exports = router;