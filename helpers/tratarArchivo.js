const fs = require('fs');
const path = './db/data.json';

const insertTareaDB = ( tarea ) => {

    fs.writeFileSync(path, JSON.stringify(tarea));

}

const leerTareasDB = () => {

    if(!fs.existsSync(path)){
        return false;
    }
    
    let lectura = JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }));

    return lectura;

}

module.exports = { insertTareaDB, leerTareasDB }