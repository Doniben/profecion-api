import { Schema, model } from "mongoose";

const profesorSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    materia: {
      type: String,
      required: true,
    },
    cursos: {
      type: String,
      required: false,
    },
    estado: {
      type: Boolean,
      required: false,
    },
    calificacionTotalEncuesta: {
      type: Number,
      required: false,
    },
    promedioEstudiante: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Profesor", profesorSchema);
