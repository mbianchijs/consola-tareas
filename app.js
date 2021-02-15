const { menuHome, pausa } = require('./helpers/home');
const Tareas = require('./models/tareas');

const principal = async () => {

    let opt = 0;

    do {

        opt = await menuHome();

        console.log(opt);
        
    } while (opt.opciones !== 0) {
        
        console.log("¡Hasta luego!");

    }

}

principal();