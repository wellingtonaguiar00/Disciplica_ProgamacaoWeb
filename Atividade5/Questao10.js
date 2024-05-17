function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

var numeroUsuario = parseInt(prompt("Digite um número para calcular o fatorial:"));
alert("Fatorial de " + numeroUsuario + ": " + calcularFatorial(numeroUsuario));
