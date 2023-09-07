const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Mi primer ola mundo desde el backend con R2 aaaa !!");
    
    console.log("Se recibio paqueteexi ");
    
});

server.listen(8080, () => {
    console.log('El servidor esta corriendo y escuchando en el puerto 8080...');
});

