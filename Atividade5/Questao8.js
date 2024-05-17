function verificarPalindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}

var palavraUsuario = prompt("Digite uma palavra para verificar se é um palíndromo:");
if (verificarPalindromo(palavraUsuario)) {
    alert(palavraUsuario + " é um palíndromo.");
} else {
    alert(palavraUsuario + " não é um palíndromo.");
}
