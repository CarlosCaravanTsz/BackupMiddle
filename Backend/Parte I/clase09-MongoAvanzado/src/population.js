import studentModel from './models/student.model.js'
import courseModel from "./models/course.model.js";
import mongoose from 'mongoose';

const uri ="mongodb+srv://carloscara28:DnERG59KflAo9jen@carlosbackenddb.44mn6xw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { dbName: 'clase09_mongo1' }).then(async () => {
    console.log('DB connected');

    // AGREGAMOS DATOS AL MODELO DE LA BD
    /* await studentModel.create({
        name: 'Eri',
    });

    await courseModel.create({
        title: 'Defensa contra las artes oscuras',
        description: 'Saber defenderse de ataques oscuros',
        difficulty: 5,
        topics: ['Spectro Patronus', 'Expeliermus'],
        professor: 'Lupin;'
    }); */

    //Agregamos un curso al estudiante
    /*
    const student = await studentModel.findOne({
      _id: "64c5337d7669abf5c9ccf888",
    });

    student.courses.push({ course: "64c5337d7669abf5c9ccf88a" });

    const result = await studentModel.updateOne(
      { _id: "64c5337d7669abf5c9ccf888" },
      student
    );
    console.log(result); */

    //HACEMOS LA BUSQUEDA

    const student = await studentModel.findOne({
      _id: "64c5337d7669abf5c9ccf888"})

    console.log(JSON.stringify(student, null, '\t'));


});