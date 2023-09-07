// REQUERIMIENTO: HACER UN ARRAY DE 10,000 ELEMENTOS CUYO VALOR ES UN VALOR RANDOM ENTRE
// 1 Y 20 Y GENERAR UN OBJETO QUE CUENTE CUANTAS VECES SALIO CADA VALOR.

function RandomArray(min, max, size) {
    let array = [];

    for(let i = 0; i < size; i++ )
        array.push(Math.floor( Math.random() * (max - min + 1) + min ));
    return array;
}

let array = RandomArray(1,20,10000);

const countOnNumberIndex = array.reduce((acc, e) => {
    if (acc[e]) {
        acc[e] += 1;
    } else {
        acc[e] = 1;
    };
    return acc;
}, {});


console.log(countOnNumberIndex);
Math.floor( Math.random() * (max - min + 1) + min )
// COMPROBACION

console.log(Object.values(countOnNumberIndex).reduce((acc, e) => {
    return acc + e;
}, 0));