const Tarea = require('./tarea');

class Tareas {

    _listado = {}

    // Al ser un getter, queda como un atributo de la clase

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

    listarCompletadasPendientes( completadas = true ) {

        console.log();

        if(!this.listarTareas) {

            console.log("No hay tareas registradas");
            return false;

        }
        
        const resultado = this.listarTareas.filter(tarea => {
            return completadas
                ? tarea.fecha_completada != null 
                : tarea.fecha_completada === null;
        });

        if(resultado.length !== 0) {
            
            resultado.forEach((tarea, index) => {
                
                const indice = `${ index + 1 }.`.green
                const estado = `${ tarea.fecha_completada 
                    ? 'Completada'.green 
                    : 'Pendiente'.red}`
                console.log(`${ indice } ${ tarea.desc } :: ${ estado }`)
            })

        } else {

            console.log(`No hay tareas ${ completadas ? 'completadas' : 'pendientes' }`);
        }

    }

    borrarTarea( id = '' ) {

        if(this._listado[id]) {
            delete this._listado[id];
        }

    }

    toogleCompletar( ids = [] ) {

        ids.forEach(id => {

            if(!this._listado[id].fecha_completada) {

                this._listado[id].fecha_completada = new Date();

            }
            
        });
    }

}

module.exports = Tareas;