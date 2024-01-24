//variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = "intento";
let maximosIntentos = 3;
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt("dame un numero entre 1 y 10 porfa:"));

  console.log(numeroUsuario);

  console.log("Resultado de la comparación:", numeroUsuario == numeroSecreto);

  // este codigo hace la comparacion
  if (numeroSecreto === numeroUsuario) {
    //acerto
    alert(
      `acertaste, el numero secreto es ${numeroSecreto}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("el numero secreto es menor");
    } else {
      alert("el numero secreto es mayor");
    }
    intentos++;
    // palabraIntentos = "intentos";
    if (intentos > maximosIntentos) {
      alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
      break;
    }
  }
}
