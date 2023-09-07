import express from 'express'

const app = express();

app.get('/bienvenida', (req, response) => {
    const html = "<html><body><h1 style='color:blue'>Bienvenidos a mi Servidor desde Express!</h1></body></html>";
    response.send(html);

});


app.get('/usuario', (req, response) => {
    const user = {
        name: 'Carlos',
        apellido: 'Caravantes',
        edad: 24,
        correo: "a@hotmail.com"
    };

    response.send(`Objeto recibido: name= ${user.name}, apellido = ${user.apellido}, edad= ${user.edad}, correo: ${user.correo}`);
});



// LISTENING
app.listen(8080, () => {
    console.log('Running on 8080...');
});