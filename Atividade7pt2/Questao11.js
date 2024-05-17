let quantidade = parseInt(prompt("Digite a quantidade de notas:"));
let soma = 0;

for (let i = 0; i < quantidade; i++) {
    let nota = parseFloat(prompt("Digite a " + (i + 1) + "ª nota:"));
    soma += nota;
}

let media = soma / quantidade;
alert("A média das notas é: " + media.toFixed(2));
