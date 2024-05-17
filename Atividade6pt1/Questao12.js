let numero = parseInt(prompt("Digite um número para ver a tabuada (de 1 a 10):"));

console.log("Tabuada de " + numero + ":");

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
