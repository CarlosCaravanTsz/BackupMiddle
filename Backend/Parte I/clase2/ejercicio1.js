objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2,
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4,
    }
];

const productTypes = objetos.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
        if (!acc.includes(key)) {
            acc.push(key);
        }
    });
    return acc;
}, []);

console.log("ProductTypes: ", productTypes);

const ProductSales = productTypes.reduce((acc, product) => {
    acc[product] = 0;
    objetos.forEach( obj => {
        if (obj[product]) {
            acc[product] += obj[product];
        }
    });
    return acc;
}, {});

console.log("ProductSales: ", ProductSales);





//const totales = objetos.reduce((acc, obj) => acc + Object.values(obj).reduce((acc, val) => acc + val, 0), 0);