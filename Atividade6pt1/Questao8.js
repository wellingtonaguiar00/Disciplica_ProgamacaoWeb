let numeros = [];
for (let i = 0; i < 5; i++) {
    numeros.push(parseFloat(prompt("Digite o " + (i + 1) + "º número:")));
}

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

let media = soma / numeros.length;

alert("Soma dos números: " + soma + "\nMédia dos números: " + media);
