const fs = require("fs");

const date = new Date();

const filename = "date.txt";

const text = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} at ${date.toString()}`;

fs.writeFile(filename, text, (err) => {
    if (err) return console.log("Hubo un error al escribir");
    fs.readFile(filename, { encoding: "utf-8" }, (err, contenido) => {
        if (err) return console.log("Hubo un error al leer el archivo");
        console.log(contenido);
    });
});

