const texto =
  "Bienvenido detective Code. Ha ocurrido un crimen en la mansión del señor Byte y le han llamado a usted para resolver el misterio. Se ha encontrado el cuerpo sin vida del señor Byte en el salón principal. Todos los sospechosos se encuentran en la mansión y han sido convocados a la escena del crimen para ser interrogados. La casa está en completo silencio mientras usted ingresa. Los sospechosos, con expresiones nerviosas, esperan sus preguntas.";

function escribirTexto(texto, elemento, velocidad) {
  let index = 0;
  const intervalo = setInterval(() => {
    elemento.innerHTML += texto[index];
    index++;
    if (index === texto.length) {
      clearInterval(intervalo);
      // Iniciar el parpadeo del cursor solo después de que se haya escrito todo el texto
      iniciarParpadeo(elemento);
    }
  }, velocidad);
}

function iniciarParpadeo(elemento) {
  setInterval(() => {
    const ultimoCaracter = elemento.innerHTML.slice(-1);
    if (ultimoCaracter === "|") {
      elemento.innerHTML = elemento.innerHTML.slice(0, -1);
    } else {
      elemento.innerHTML += "|";
    }
  }, 500); // Cambia el valor para ajustar la velocidad de parpadeo
}

const parrafo = document.querySelector(".parrafo1");
escribirTexto(texto, parrafo, 35); // Velocidad de escritura: 50ms por letra
