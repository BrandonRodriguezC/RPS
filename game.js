let puntajeUsuario = 0;
let puntajeComputador = 0;
const arreglo = ["P", "A", "T"];
const puntajeUsuario_span = document.getElementById("usuario-puntuacion");
const puntajeComputador_span = document.getElementById("computador-puntuacion");
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijera_div = document.getElementById("tijera");
const resultado_p = document.querySelector(".resultado");

main();

function lectura(letraLec) {
  var rta = "";
  if (letraLec === "P") {
    rta = "Piedra";
  } else if (letraLec === "A") {
    rta = "Papel";
  } else if (letraLec === "T") {
    rta = "Tijera";
  }
  return rta;
}

function ganador(eleccionUsuario, pc) {
  const resultadoU = lectura(eleccionUsuario);
  const resultadoPc = lectura(pc);
  puntajeUsuario++;
  puntajeUsuario_span.innerHTML = puntajeUsuario;
  puntajeComputador_span.innerHTML = puntajeComputador;
  resultado_p.innerHTML = "GANASTE!!! " + resultadoU + " le gana a " + resultadoPc;
}

function perdedor(eleccionUsuario, pc) {
  const resultadoU = lectura(eleccionUsuario);
  const resultadoPc = lectura(pc);
  puntajeComputador++;
  puntajeUsuario_span.innerHTML = puntajeUsuario;
  puntajeComputador_span.innerHTML = puntajeComputador;
  resultado_p.innerHTML = "PERDISTE :( " + resultadoU + " pierde con " + resultadoPc;
}

function empate(eleccionUsuario, pc) {
  const resultadoU = lectura(eleccionUsuario);
  const resultadoPc = lectura(pc);
  puntajeUsuario_span.innerHTML = puntajeUsuario;
  puntajeComputador_span.innerHTML = puntajeComputador;
  resultado_p.innerHTML = "EMPATE!!! " + resultadoU + " empata con " + resultadoPc;
}

function eleccion() {
  const numero = Math.floor(Math.random() * 3);
  console.log(numero);
  return arreglo[numero];
}

function juego(eleccionUsuario) {
  const pc = eleccion();
  switch (eleccionUsuario + pc) {
    case "PT":
    case "AP":
    case "TA":
      ganador(eleccionUsuario, pc);
      break;
    case "TP":
    case "PA":
    case "AT":
      perdedor(eleccionUsuario, pc);
      break;
    case "TT":
    case "PP":
    case "AA":
      empate(eleccionUsuario, pc);
      break;
  }
}

function main() {
  piedra_div.addEventListener('click', function () {
    juego("P");
  })

  papel_div.addEventListener('click', function () {
    juego("A");
  })

  tijera_div.addEventListener('click', function () {
    juego("T");
  })
}
