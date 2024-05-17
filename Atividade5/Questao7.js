function acrescentarPorcentagem(valor, porcentagem) {
    return valor * (1 + porcentagem / 100);
}

var valor = parseFloat(prompt("Digite um valor:"));
var porcentagem = parseFloat(prompt("Digite a porcentagem a ser acrescentada:"));

alert("Valor acrescido: " + acrescentarPorcentagem(valor, porcentagem));
