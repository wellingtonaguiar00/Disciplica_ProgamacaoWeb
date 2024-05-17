let quantidade = parseInt(prompt("Digite a quantidade de números:"));
let soma = 0;
let menor = Infinity;
let maior = -Infinity;

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    soma += numero;
    if (numero < menor) {
        menor = numero;
    }
    if (numero > maior) {
        maior = numero;
    }
}

alert("Menor valor: " + menor + "\nMaior valor: " + maior + "\nSoma dos valores: " + soma);
