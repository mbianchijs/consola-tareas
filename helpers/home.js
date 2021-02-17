const inquirer = require('inquirer');
const colores = require('colors');

const preguntas = [
    {
        type: "list",
        name: "opciones",
        message: "Indique actividad a realizar",
        choices: [
            {
                value: 1,
                name: `${'1.'.yellow} Crear una tarea`
            },
            {
                value: 2,
                name: `${'2.'.yellow} Listas todas las tareas`
            },
            {
                value: 3,
                name: `${'3.'.yellow} Listas tareas pendientes`
            },
            {
                value: 4,
                name: `${'4.'.yellow} Listas tareas completadas`
            },
            {
                value: 5,
                name: `${'5.'.yellow} Eliminar tarea`
            },
            {
                value: 0,
                name: `${'0.'.yellow} Salir`
            },

        ],

    }
];


const menuHome = async () => {

    console.clear();
    console.log('*****************************************');
    console.log(`${ 'Bienvenido sistema de gestión de tareas'.green }`);
    console.log('*****************************************');

    const {opciones} = await inquirer.prompt(preguntas);

    return opciones;
}

const pausar = async () => {

    const pregunta = [
        {
            type: "input",
            name: "pausar",
            message: `Presione ${ 'Enter'.blue } para continuar`
        }
    ]

    const pausar = await inquirer.prompt(pregunta);

    return pausar;

}

const leerIngreso = async ( message ) => {

    const pregunta = [
        {
            type: "input",
            name: "ingreso",
            message,
            validate: function ( ingreso ) {
                if( ingreso.length === 0 ) {
                    return `${'Debe ingresar un valor'.red}`;
                }

                return true;
            }
        }
    ]

    const { ingreso } = await inquirer.prompt(pregunta);

    return ingreso;

}


module.exports = { 
    menuHome,
    pausar,
    leerIngreso 
};