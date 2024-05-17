function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

do {
    let numero = parseInt(prompt("Digite um número para calcular o fatorial (limite máximo: 15):"));
    if (numero >= 0 && numero <= 15) {
        alert(numero + "! = " + calcularFatorial(numero));
    } else {
        alert("Número inválido! Digite um número inteiro positivo menor ou igual a 15.");
    }
} while (confirm("Deseja calcular outro fatorial?"));
