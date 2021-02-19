const Tarea = require('./tarea');

class Tareas {

    _listado = {}

    // Al ser un setter, queda como un atributo de la clase

    get listarTareas () {

        const arreglo = [];

        Object.keys(this._listado).forEach(indice => {
            arreglo.push(this._listado[indice]);
        })

        return arreglo;
    }

    constructor( ) {
        this._listado = {}
    }

    cargarTareasArrayDB( tareas = [] ) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })

    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
        
    }


}

module.exports = Tareas;