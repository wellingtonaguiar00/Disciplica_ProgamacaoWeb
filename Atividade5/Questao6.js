function inverterArray(array) {
    return array.reverse();
}

var elementos = prompt("Digite uma lista de elementos separados por vírgula (por exemplo: 1, 2, 3):");
var arrayElementos = elementos.split(",");

alert("Array invertido: " + inverterArray(arrayElementos));
