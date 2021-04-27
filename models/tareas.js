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

    listadoCompleto() {

        console.log();
        
        this.listarTareas.forEach((tarea, index) => {
            
            const indice = `${ index + 1 }`.green
            const estado = `${ tarea.fecha_completada 
                ? 'Completada'.green 
                : 'Pendiente'.red}`
            console.log(`${ indice } ${ tarea.desc } :: ${ estado }`)
            
        });

    }


}

module.exports = Tareas;