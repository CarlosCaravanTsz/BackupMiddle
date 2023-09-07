const obj1 = {
    field11: 222,
    field22: 'Romina',
    field33: true,
    field44: 'Agustin',
    field66: 555,
};

const obj2 = {
    field1: 'TUTOS',
    field2: [2, 3, 4, 5],
};

// DESTRUCTURACION DE OBJECTOS

const { field22, field33 } = obj1;
console.log(field22, field33); 

//tambien podes cambiarle de nombre al momento de deestructurarlo asi

const { field22: name } = obj1
console.log(name);

// SPREAD OPERATOR PARA OBJECTOS
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);


// REST OPERATOR
const obj4 = {
    field111: 222,
    field222: 'Romina',
    field333: true,
    field444: 'Agustin',
};

const { field111, ...rest } = obj4;
console.log(field111, rest);
