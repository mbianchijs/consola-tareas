const { menuHome, pausar } = require('./helpers/home');
const Tareas = require('./models/tareas');

const principal = async () => {

    let opciones = 0;

    do {

        opciones = await menuHome();

        await pausar();
        
    } while (opciones !== 0) {
        
        console.log("¡Hasta luego!");

    }

}

principal();