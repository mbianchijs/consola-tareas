const { 
    menuHome, 
    pausar,
    leerIngreso,
    listadoTareasBorrar 
} = require('./helpers/home');
const { 
    insertTareaDB, 
    leerTareasDB 
} = require('./helpers/tratarArchivo');

const Tareas = require('./models/tareas');

const principal = async () => {

    let opciones = 0;
    const tareas = new Tareas();

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
                // Listar todas las tareas desde .json
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
                break;

            case 6:
                // Eliminar tarea
                const id = await listadoTareasBorrar(tareas.listarTareas);
                console.log(id);
                break;
            
        }

        console.log();
        await pausar();
        
    } while (opciones !== 0) {
        
        console.log("¡Hasta luego!");

    }

}

principal();