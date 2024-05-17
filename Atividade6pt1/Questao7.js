let numeros = [];
for (let i = 0; i < 5; i++) {
    numeros.push(parseInt(prompt("Digite o " + (i + 1) + "º número:")));
}

let maiorNumero = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

alert("O maior número é: " + maiorNumero);
