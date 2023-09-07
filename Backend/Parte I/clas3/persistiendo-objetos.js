const fs = require('fs');

const obj = {
    name: 'Jorge',
    lastname: 'Rangel',
    age: 30,
};

fs.writeFileSync('objeto.json', JSON.stringify(obj)); // crea un archivo y escribe el objeto en formato json

const contenido = fs.readFileSync('objeto.json', { encoding: 'utf-8' });

const contenidoObj = JSON.parse(contenido); // convirtiendo de string a objeto

console.log(contenidoObj);

contenidoObj.name = 'Valentin';

console.log(contenidoObj);
