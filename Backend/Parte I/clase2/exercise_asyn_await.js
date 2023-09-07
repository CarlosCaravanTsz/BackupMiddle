const dividir = (dividiendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) return reject('No se puede dividir por 0');
        else return resolve(dividiendo / divisor);
    });
};

const funcionAsincronico = async () => {
    const resultado = await dividir(34, 7);
    const resultado2 = await dividir(100, 2);
    
    console.log(resultado, resultado2);

}

funcionAsincronico();
