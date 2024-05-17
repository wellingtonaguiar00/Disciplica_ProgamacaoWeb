let numerosPares = 0;
let numerosImpares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
    if (numero % 2 === 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }
}

alert("Quantidade de números pares: " + numerosPares + "\nQuantidade de números ímpares: " + numerosImpares);
