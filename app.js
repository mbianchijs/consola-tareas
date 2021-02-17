const { 
    menuHome, 
    pausar,
    leerIngreso 
} = require('./helpers/home');
const { insertTarea } = require('./helpers/tratarArchivo');
const Tareas = require('./models/tareas');

const principal = async () => {

    let opciones = 0;
    const tareas = new Tareas();

    do {

        opciones = await menuHome();

        switch (opciones) {
            case 1:
                // Crear tarea
                const ingreso = await leerIngreso('Ingrese el nombre de la tarea: ');
                tareas.crearTarea(ingreso);
                insertTarea(tareas.listarTareas);

                break;
            case 2:
                // Listar todas las tareas
                console.log(tareas.listarTareas);
                
                break;
            case 3:
                // Listas tareas pendientes

                
                break;
            case 4:
                // Listar tareas completadas
                
                break;
            case 5:
                // Eliminar tarea
                
                break;
            
        }

        await pausar();
        
    } while (opciones !== 0) {
        
        console.log("¡Hasta luego!");

    }

}

principal();