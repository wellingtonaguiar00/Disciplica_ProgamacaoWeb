let quantidade = parseInt(prompt("Digite a quantidade de números:"));
let soma = 0;
let menor = Infinity;
let maior = -Infinity;

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    if (numero >= 0 && numero <= 1000) {
        soma += numero;
        if (numero < menor) {
            menor = numero;
        }
        if (numero > maior) {
            maior = numero;
        }
    } else {
        alert("Número fora do intervalo permitido. Digite um número entre 0 e 1000.");
        i--; // Para garantir que o usuário insira a quantidade correta de números
    }
}

alert("Menor valor: " + menor + "\nMaior valor: " + maior + "\nSoma dos valores: " + soma);
