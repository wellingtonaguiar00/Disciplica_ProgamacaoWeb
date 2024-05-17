function converterParaBinario(numero) {
    return numero.toString(2);
}

var numeroUsuario = parseInt(prompt("Digite um número para converter para binário:"));
alert("Número em binário: " + converterParaBinario(numeroUsuario));
