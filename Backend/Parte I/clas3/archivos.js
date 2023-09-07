const fs = require('fs'); // libreria de node para trabajar con archivos del sistema operativo

const fileName = 'ejemplo.txt'; // puedo ponerle una ruta pero esa ruta debe existir completa


// Escribir archivo
fs.writeFileSync(fileName, 'Hola mundo desde Node.js'); // crea un archivo y escribe en el

if (fs.existsSync(fileName)) { // verifica si existe el archivo
    console.log("El archivo existe");

    // Leer contenido de un archivo
    const contenido = fs.readFileSync(fileName, { encoding: 'utf-8' }); // lee el archivo y lo guarda en una var
    console.log(contenido);


    // Agregar contenido a un archivo (append)
    fs.appendFileSync(fileName, '\nAdios mundo desde Node.js'); // agrega contenido al final del archivo

    // Borrar archivo
    fs.unlinkSync(fileName); // borra el archivo
}


console.log("Finalizamos el proceso"); // se ejecuta antes de que se termine de escribir el archivo