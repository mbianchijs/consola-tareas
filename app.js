const { menuHome } = require('./helpers/home');

const principal = async () => {
    
    let opt = 0;

    do {

        opt = await menuHome();
        


        
    } while (opt.opciones !== 0) {
        
        console.log("¡Hasta luego!");

    }



}

principal();