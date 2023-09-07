const fs = require("fs");

const filename = "ejemplo.txt";

const operacionAsync = async () => {

    try {
        await fs.promises.writeFile(filename, "Hola mundo desde Node.js");

        let contenido = await fs.promises.readFile(filename, { encoding: "utf-8" })
            .then(contenido => console.log(contenido));
        
    } catch (error) {
        console.log("Hubo un error al escribir", e);
    }


};

operacionAsync()
console.log("Finalizamos el proceso");