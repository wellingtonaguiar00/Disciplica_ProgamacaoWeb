function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return "divisível por " + i;
        }
    }
    return "é primo";
}

let numero = parseInt(prompt("Digite um número para verificar se é primo:"));
let resultado = verificarPrimo(numero);
alert(numero + " " + resultado);
