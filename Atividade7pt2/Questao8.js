function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let numero = parseInt(prompt("Digite um número para verificar se é primo:"));

if (verificarPrimo(numero)) {
    alert(numero + " é um número primo.");
} else {
    alert(numero + " não é um número primo.");
}
