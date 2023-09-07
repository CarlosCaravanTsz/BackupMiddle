import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: String,
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }
});

studentSchema.pre('findOne', function () {
    this.populate('courses.course')
}) // Middleware para el esquema

const studentModel = mongoose.model('students', studentSchema)

export default studentModel;