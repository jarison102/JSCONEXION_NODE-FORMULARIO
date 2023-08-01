// index.js
// Espera a que el contenido de la página HTML haya cargado completamente
// antes de ejecutar el código dentro de la función
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencia al formulario
  const formulario = document.getElementById("miformulario");

  // Agregar un evento "submit" al formulario para capturar la acción del envío
  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto
    // Obtener los datos del formulario utilizando FormData
    const formData = new FormData(formulario);

    // Mostrar los datos en pantalla
    const datosMostrados = document.getElementById("datosMostrados");
    datosMostrados.innerHTML = `
            Nombre: ${formData.get("Nombre")}<br />
            Apellido: ${formData.get("Apellido")}<br />
            Correo: ${formData.get("Correo")}<br />
            Telefono: ${formData.get("Telefono")}<br />
            Pais: ${formData.get("Pais")}
          `;
    /*
 // de forma dificil
    // Obtener los valores ingresados por el usuario
    const Nombre = formulario.Nombre.value;
    const Apellido = formulario.Apellido.value;
    const Correo = formulario.Correo.value;
    const Telefono = formulario.Telefono.value;
    const Pais = formulario.Pais.value;
    // Mostrar los datos en pantalla
    const datosMostrados = document.getElementById("datosMostrados");
    datosMostrados.innerHTML = `Nombre: ${Nombre}`;
    const datosMostrados2 = document.getElementById("datosMostrados2");
    datosMostrados2.innerHTML = `Apellido: ${Apellido}`;
    const datosMostrados3 = document.getElementById("datosMostrados3");
    datosMostrados3.innerHTML = `Correo: ${Correo}`;
    const datosMostrados4 = document.getElementById("datosMostrados4");
    datosMostrados4.innerHTML = `Telefono: ${Telefono}`;
    const datosMostrados5 = document.getElementById("datosMostrados5");
    datosMostrados5.innerHTML = `Pais: ${Pais}`;
 */

    // Mostrar los datos en una alerta
    alert(`Nombre: ${formData.get("Nombre")}`);
    alert(`Apellido: ${Apellido}`);
    alert(`Correo: ${Correo}`);
    alert(`Telefono: ${Telefono}`);
    alert(`Pais: ${Pais}`);
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miformulario");
    const tablaDatos = document.getElementById("tablaDatos");
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = new FormData(formulario);
  
      // Crear una nueva fila en la tabla con los datos del formulario
      const fila = document.createElement("tr");
  
      // Crear celdas y agregar los datos del formulario a las celdas
      formData.forEach((valor, clave) => {
        const celda = document.createElement("td");
        celda.textContent = valor;
        fila.appendChild(celda);
      });
  
      // Agregar la fila a la tabla
      tablaDatos.appendChild(fila);
    });
  });
  

