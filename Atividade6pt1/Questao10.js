let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

console.log("Números entre " + num1 + " e " + num2 + ":");
if (num1 < num2) {
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
} else {
    for (let i = num2 + 1; i < num1; i++) {
        console.log(i);
    }
}
