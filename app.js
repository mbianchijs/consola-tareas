const { 
    menuHome, 
    pausar,
    leerIngreso,
    listadoTareasBorrar, 
    confirmarAccion,
    mostrarListadoChecklist
} = require('./helpers/home');
const { 
    insertTareaDB, 
    leerTareasDB 
} = require('./helpers/tratarArchivo');

const Tareas = require('./models/tareas');

const principal = async () => {

    let opciones = 0;
    const tareas = new Tareas();

    // Comprobamos la existencia de tareas en la BD, 
    // la traemos y luego cargamos en objeto _listado.
    const tareasDB = leerTareasDB();

    if(tareasDB){
        tareas.cargarTareasArrayDB(tareasDB);
    }

    do {

        opciones = await menuHome();

        switch (opciones) {

            case 1:
                // Crear tarea
                const ingreso = await leerIngreso('Ingrese el nombre de la tarea: ');
                tareas.crearTarea(ingreso);
                insertTareaDB(tareas.listarTareas);

                break;
                
            case 2:
                // Listar todas las tareas
                if(leerTareasDB()){
                    tareas.listadoCompleto();
                } else {
                    console.log("No hay tareas cargadas");
                }

                break;

            case 3:
                // Listas tareas pendientes
                tareas.listarCompletadasPendientes(false);
                
                break;

            case 4:
                // Listar tareas completadas
                tareas.listarCompletadasPendientes();
                
                break;

            case 5:
                // Completar tarea
                const ids = await mostrarListadoChecklist(tareas.listarTareas);
                tareas.toogleCompletar(ids);

                break;

            case 6:
                // Eliminar tarea
                const id = await listadoTareasBorrar(tareas.listarTareas);
                
                if(id !== 0) {
                    const ok = await confirmarAccion('¿Está de acuerdo?');
                    if(ok) {
                        tareas.borrarTarea(id);
                    }
                }

                break;
            
        }

        console.log();

        // Hacemos persistente la data de la BD
        insertTareaDB(tareas.listarTareas);
        
        await pausar();
        
    } while (opciones !== 0) {
        
        console.log("¡Hasta luego!");

    }

}

principal();