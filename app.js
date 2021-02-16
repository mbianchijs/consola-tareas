const { menuHome, pausar } = require('./helpers/home');
const Tareas = require('./models/tareas');

const principal = async () => {

    let opciones = 0;
    const tareas = new Tareas();

    do {

        opciones = await menuHome();

        switch (opciones) {
            case 1:
                // Crear tarea
                tareas.crearTarea('Dormir');
                
                break;
            case 2:
                // Listar todas las tareas
                console.log(tareas._listado);
                
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