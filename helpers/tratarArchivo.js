const fs = require('fs');

const insertTarea = ( tarea ) => {

    const path = './db/data.json';

    fs.writeFileSync(path, JSON.stringify(tarea));

}

module.exports = { insertTarea }