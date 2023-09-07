const sumar = (n1, n2) => {
    return new Promise((resolve, reject) => {
        if (n1 === 0 || n2 === 0) reject('Operacion Innecesaria')
        else if (n1 < 0 || n2 < 0) reject('Soy racista')
        else resolve(n1 + n2)
    })
}

const restar = (n1, n2) => {
    return new Promise((resolve, reject) => {
        if (n1 === 0 || n2 === 0) reject('Operacion Innecesaria')
        const result = n1 - n2;
        if (result < 0) reject('Soy racista')
        return resolve(result)
        
    })
}

const multiplicar = (n1, n2) => {
    return new Promise((resolve, reject) => {
        if (n1 < 0 || n2 < 0) reject('Soy racista')
        else resolve(n1 * n2)
    })
}

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(dividendo < 0 || divisor < 0) reject('Soy racista')
        if (divisor === 0) reject('No se puede dividir por 0');
        return resolve(dividendo / divisor);
    });
}

// then catch

sumar(2, -5).then(result => console.log(result)).catch(error => console.log(error))

restar(2, 5).then(result => console.log(result)).catch(error => console.log(error))

multiplicar(2, 5).then(result => console.log(result)).catch(error => console.log(error))

dividir(2, 5).then(result => console.log(result)).catch(error => console.log(error))




// async await
console.log('------------------------------------------')

const funcAsync = async () => {
    try {
        console.log(await sumar(0, 5));
        console.log(await restar(12, -5));
        console.log(await multiplicar(2, 5));
        console.log(await dividir(12, 5));
    } catch (error) {
        console.log('ERROR FATAL')
    }
}

funcAsync()