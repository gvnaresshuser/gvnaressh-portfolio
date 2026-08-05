console.log("import.meta.env =", import.meta.env);

console.log("VITE_EXPERIENCE =", import.meta.env.VITE_EXPERIENCE);
console.log("VITE_TRAINING =", import.meta.env.VITE_TRAINING);
console.log("VITE_TECHNOLOGIES =", import.meta.env.VITE_TECHNOLOGIES);
console.log("VITE_STUDENTS_TRAINED =", import.meta.env.VITE_STUDENTS_TRAINED);

export const PROFILE = {
  experience: Number(import.meta.env.VITE_EXPERIENCE),
  training: Number(import.meta.env.VITE_TRAINING),
  technologies: Number(import.meta.env.VITE_TECHNOLOGIES),
  students: Number(import.meta.env.VITE_STUDENTS_TRAINED),
};
