//variables
let numeroSecreto = 6;
let numeroUsuario = prompt("dame un numero entre 1 y 10 porfa:");

console.log(numeroUsuario);

console.log("Resultado de la comparación:", numeroUsuario == numeroSecreto);

/* este codigo hace la comparacion
 */

if (numeroSecreto == numeroUsuario) {
  //acerto
  alert(`acertaste, el numero secreto es ${numeroSecreto}`);
} else {
  //no acerto
  alert("lo siento, no acertaste");
}
