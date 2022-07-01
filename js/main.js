console.log("Simulador Interactivo");

let precio = 100000;
let resultado;
// for (i = 1; i <= 12; i++) {
let ingresarNumero = prompt("Ingresar numero de cuotas");
// }
alert("Su numero de cuotas es " + ingresarNumero);
resultado = precio / ingresarNumero;
console.log(
  "El precio es de $100000, " + "ingresaste " +  + ingresarNumero + " " + "cuotas sin interes " + "por lo tanto, cada cuota vale " +
    resultado
);
