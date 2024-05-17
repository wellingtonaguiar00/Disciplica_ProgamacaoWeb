function contarDivisoes(numero) {
    let divisoes = 0;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        divisoes++;
        if (numero % i === 0) {
            return divisoes;
        }
    }
    return divisoes;
}

let limite = parseInt(prompt("Digite um número para encontrar todos os primos até ele:"));
let primos = [];

for (let i = 2; i <= limite; i++) {
    if (verificarPrimo(i) === "é primo") {
        primos.push(i);
    }
}

alert("Números primos até " + limite + ": " + primos.join(", "));
