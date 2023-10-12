const render = async () => {
  const obtenerData = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Liziyeah/data/main/data.json"
    );
    const data = await response.json();
    return data;
  };

  const data = await obtenerData();
  console.log(data);

  const persona1 = new Persona(data.nombre, data.edad);
  persona1.saludar();
  console.log(persona1.nombre);

  const anita = new Persona("Anita", "Lala");
  anita.saludar();
};

window.onload = render;
