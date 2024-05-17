function converterParaCaixaAlta(string) {
    return string.toUpperCase();
}

var stringUsuario = prompt("Digite uma string para converter para caixa alta:");
alert("String em caixa alta: " + converterParaCaixaAlta(stringUsuario));
