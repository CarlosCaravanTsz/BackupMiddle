const temporizador = () => {

    console.log("Iniciamos el temporizador");
    let counter = 1;
    const timer = setInterval(() => {
        console.log(++counter)
        if(counter > 5) clearInterval(timer);
    }, 2000);
}

console.log("TikTok");
temporizador();

console.log("Finalizamos el proceso");