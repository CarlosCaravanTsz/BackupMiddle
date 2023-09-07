import mongoose from 'mongoose';
import orderModel from './models/order.model.js';

const uri =
  "mongodb+srv://carloscara28:DnERG59KflAo9jen@carlosbackenddb.44mn6xw.mongodb.net/?retryWrites=true&w=majority";


const run = async () => {
    console.log('DB connected');

//     const result = await orderModel.insertMany([
//       {
//         name: "Pepperoni",
//         size: "small",
//         price: 19,
//         quantity: 10,
//         date: "2022-01-11T18:50:30Z",
//       },
//       {
//         name: "Pepperoni",
//         size: "medium",
//         price: 20,
//         quantity: 20,
//         date: "2022-01-15T18:50:30Z",
//       },
//       {
//         name: "Pepperoni",
//         size: "medium",
//         price: 20,
//         quantity: 20,
//         date: "2022-01-15T18:50:30Z",
//       },
//       {
//         name: "Pepperoni",
//         size: "large",
//         price: 21,
//         quantity: 30,
//         date: "2022-01-17T18:50:30Z",
//       },
//       {
//         name: "Cheese",
//         size: "small",
//         price: 12,
//         quantity: 15,
//         date: "2022-01-11T18:50:30Z",
//       },
//       {
//         name: "Cheese",
//         size: "medium",
//         price: 13,
//         quantity: 50,
//         date: "2022-01-11T18:50:30Z",
//       },
//       {
//         name: "Cheese",
//         size: "large",
//         price: 14,
//         quantity: 10,
//         date: "2022-01-11T18:50:30Z",
//       },
//       {
//         name: "Hawaina",
//         size: "small",
//         price: 17,
//         quantity: 10,
//         date: "2022-01-11T18:50:30Z",
//       },
//       {
//         name: "Hawaina",
//         size: "medium",
//         price: 18,
//         quantity: 10,
//         date: "2022-01-11T18:50:30Z",
//       },
//     ]);
//     console.log(result);

    const orders = await orderModel.aggregate([
    // Stage 1. Filtrar las ordenes por un criterio
        { $match: { size: 'medium' } },
    // Stage 2. Agrupar por sabores y acumular la cant
        {
            $group: {
                _id: '$name',
                totalQuantity: { $sum: "$quantity" }
            }
        },
        // Stage 3.Ordenar por cantidad
        { $sort: { totalQuantity: -1 } },
        
        //Stage 4. Guardar el resultado en un doc nuevo
        // El doc va a tener un _id y orders
        // Hacer $push para guardar en un nuevo campo
        // $$ROOT toma toda la estructura de cada uno
        // de los elementos
        {
            $group: {
                _id: 1,
                orders: {$push: '$$ROOT'}
            }
        },
        
        // Stage 5. Generamos un nuevo ObjectId
        {
            $project: {
                _id: 0,
                orders: "$orders"
            }
        },
        // Stage 6. Agregamos los elementos a la coleccion

        {
            $merge: {
                into: 'reports'
            }
        }

    ]);
    
    console.log(JSON.stringify(orders, null, 2, '\t'));

}

mongoose.connect(uri, { dbName: 'clase09_mongo02' }).then(run);