const mongoose = require('mongoose');

const citaSchema = mongoose.Schema({

    nombre_paciente: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    consultorio: {
        type: String,
        required: true
    },
    medico: {
        type: String,
        required: true
    }

},{ versionKey: false });

module.exports = mongoose.model('Cita', citaSchema);