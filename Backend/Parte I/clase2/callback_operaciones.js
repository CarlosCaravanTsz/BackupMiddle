const sumar = (n1, n2) = n1 + n2;
const restar = (n1, n2) = n1 - n2;
const multiplicar = (n1, n2) = n1 * n2;
const dividir = (n1, n2) = n1 / n2;

const realizarOperacion = (n1, n2, callback) => {
    console.log('Voy a realizar una operacion');
    const result = callback(n1, n2);
    console.log("el resultado es: ", result);
};


realizarOperacion(2, 5  sumar);
realizarOperacion(2, 5  restar);
realizarOperacion(2, 5  multiplicar);
realizarOperacion(2, 5  dividir);