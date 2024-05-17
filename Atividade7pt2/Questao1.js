let base = parseInt(prompt("Digite o número base:"));
let expoente = parseInt(prompt("Digite o expoente:"));
let resultado = 1;

for (let i = 0; i < expoente; i++) {
    resultado *= base;
}

alert(base + " elevado a " + expoente + " é igual a " + resultado);
