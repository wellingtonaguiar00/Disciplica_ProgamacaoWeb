function verificarPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

var numeroUsuario = parseInt(prompt("Digite um número para verificar se é primo:"));
if (verificarPrimo(numeroUsuario)) {
    alert(numeroUsuario + " é um número primo.");
} else {
    alert(numeroUsuario + " não é um número primo.");
}
