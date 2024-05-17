function calcularMedia(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma / array.length;
}

var numeros = prompt("Digite uma lista de números separados por vírgula (por exemplo: 1, 2, 3):");
var arrayNumeros = numeros.split(",").map(Number);

alert("A média dos números é: " + calcularMedia(arrayNumeros));
