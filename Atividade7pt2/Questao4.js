let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

alert(numero + "! = " + fatorial);
