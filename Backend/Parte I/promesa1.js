const dividir = (dividendo, divisor) => {
    const promesa = new Promise((resolve, reject) => {
        if (divisor == 0) reject('No se puede dividir por 0');
        else resolve(dividendo / divisor);
    });
    return promesa;
};



const p1 = dividir(34, 7);

p1
    .then((resultado) => ' El resultado es ' + resultado)
    .then(otroResult => {
        console.log(otroResult);
        const tt = 7;
        return 7
    })
    .catch((error) => console.log(error));


dividir(34, 0)
    .then(resultado => console.log('El resultado es: ', resultado))
    .catch(error => console.log(error));