require('dotenv').config();

const app = require('./app');
const database = require('./database');

async function main(){
    await app.listen(app.get('port')); // llama variable de app y utiliza su valor
    console.log('server on port ', app.get('port'));
}

main();