const temorizador = (callback) => {
    setTimeout(callback, 5000);
};


const operacion = () => console.log("VBOOOOOOMMM");

console.log("TikTok");

temorizador(operacion);

console.log("Finalizamos el proceso");