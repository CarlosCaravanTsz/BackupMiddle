const fs = require("fs");

const filename = "ejemplo.txt";

fs.writeFile(filename, "Hola mundo desde Node.js", (err) => {
    if (error) return console.log("Hubo un error al escribir");
    fs.appendFile(filename, "\nAdios mundo desde Node.js", (err) => {
        if (err) return console.log("Hubo un error al agregar mas info");
        fs.readFile(filename, { encoding: "utf-8" }, (err, contenido) => {
            if (err) return console.log("Hubo un error al leer el archivo");
            console.log(contenido);
            fs.unlink(filename, (err) => {
                if (err) return console.log("Hubo un error al borrar el archivo");
                console.log("Archivo borrado");
            });
        });
    });
});

console.log("Finalizamos el proceso");