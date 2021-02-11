const inquirer = require('inquirer');

const preguntas = [
    {
        type: "list",
        name: "opciones",
        message: "Indique actividad a realizar",
        choices: [
            {
                value: 1,
                name: "1. Crear una tarea"
            },
            {
                value: 2,
                name: "2. Listas todas las tareas"
            },
            {
                value: 3,
                name: "3. Listas tareas pendientes"
            },
            {
                value: 4,
                name: "4. Listas tareas completadas"
            },
            {
                value: 5,
                name: "5. Eliminar tarea"
            },
            {
                value: 0,
                name: "0. Salir"
            },

        ],

    }
];


const menuHome = async () => {

    console.log('*****************************************');
    console.log(' Bienvenido sistema de gestión de tareas');
    console.log('*****************************************');

    const opt = await inquirer.prompt(preguntas);

    return opt
}

module.exports = { menuHome };