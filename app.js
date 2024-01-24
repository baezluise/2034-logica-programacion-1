//variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntentos = "intento";
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("dame un numero entre 1 y 10 porfa:");

  console.log(numeroUsuario);

  console.log("Resultado de la comparación:", numeroUsuario == numeroSecreto);

  // este codigo hace la comparacion
  if (numeroSecreto == numeroUsuario) {
    //acerto
    alert(
      `acertaste, el numero secreto es ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraIntentos}`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("el numero secreto es menor");
    } else {
      alert("el numero secreto es mayor");
    }
    intentos = intentos + 1;
    palabraIntentos = "intentos";
  }
}
