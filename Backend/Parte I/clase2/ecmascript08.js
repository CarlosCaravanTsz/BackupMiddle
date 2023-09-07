const impuestos = {
    iva: 19,
    renta: 80,
    carro: 170,
}

const parLlaveValor = Object.entries(impuestos);
console.log(parLlaveValor);

const fields = Object.keys(impuestos);
console.log(fields);


const values = Object.values(impuestos);
console.log(values);

console.log("=====================================");

const impuestosTotales = values.reduce((acc, item) => {
    console.log('->', acc, item);
    return acc - item;
}, 0);

console.log("impuestosTotales", impuestosTotales);