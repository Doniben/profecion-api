import Profesor from "../models/Profesor";

export const createProfesor = async (req, res) => {
  const { nombre, materia, calificacionTotalEncuesta, promedioEstudiante } = req.body;

  try {
    const newProfesor = new Profesor({
      nombre, 
      materia, 
      calificacionTotalEncuesta, 
      promedioEstudiante
    });

    const profesorSaved = await newProfesor.save();

    res.status(201).json(profesorSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getProfesorById = async (req, res) => {
  const { profesorId } = req.params;

  const profesor = await Profesor.findById(profesorId);
  res.status(200).json(profesor);
};

export const getProfesores = async (req, res) => {
  const profesores = await Profesor.find();
  return res.json(profesores);
};

export const updateProfesorById = async (req, res) => {
  const updatedProfesor = await Profesor.findByIdAndUpdate(
    req.params.profesorId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedProfesor);
};

export const deleteProfesorById = async (req, res) => {
  const { profesorId } = req.params;

  await Profesor.findByIdAndDelete(profesorId);

  // code 200 is ok too
  res.status(204).json({message: 'Profesor eliminado'});
};
