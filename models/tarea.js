const { v4: uuidv4 } = require('uuid');

class Tarea {

    id = '';
    desc = '';
    fecha_ingreso = null;
    fecha_completada = null;

    constructor( desc ) {

        this.id = uuidv4();
        this.desc = desc;
        this.fecha_ingreso = new Date();

    }

}

module.exports = Tarea;