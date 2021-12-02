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
