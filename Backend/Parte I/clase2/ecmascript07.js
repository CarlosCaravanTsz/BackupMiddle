const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nuevoArreglo = valores.map(numero => numero ** 2);
console.log(nuevoArreglo);

const nombres = ["Juan", "Pedro", "Luis", "Ana", "Maria"];

if (nombres.includes("Juan")) {
    console.log("Si existe");
}
else {
    console.log("No existe");
}