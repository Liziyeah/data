export const data = {};

export class Persona {
  nombre = "";
  edad = "";

  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    obtenerData;
  }

  saludar() {
    console.log("hola, mi nombre es", this.nombre);
    this.#gritarApellido();
  }

  #gritarApellido() {
    console.log("MI EDAD ES", this.edad);
  }
}
const obtenerData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Liziyeah/data/main/data.json"
  );
  data = response.json();
  return this.data;
};
