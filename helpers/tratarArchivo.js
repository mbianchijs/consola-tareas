const fs = require('fs');
const path = './db/data.json';

const insertTarea = ( tarea ) => {

    fs.writeFileSync(path, JSON.stringify(tarea));

}

const leerTareas = () => {

    if(!fs.existsSync(path)){
        return false;
    }
    
    let lectura = JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }));

    return lectura;

}

module.exports = { insertTarea, leerTareas }