function verificarParOuImpar(numero) {
    return numero % 2 === 0;
}

var numeroUsuario = parseInt(prompt("Digite um número para verificar se é par ou ímpar:"));

if (verificarParOuImpar(numeroUsuario)) {
    alert(numeroUsuario + " é um número par.");
} else {
    alert(numeroUsuario + " é um número ímpar.");
}
