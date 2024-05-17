let nota;

do {
    nota = parseFloat(prompt("Digite uma nota entre 0 e 10:"));
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        alert("Valor inválido! Digite uma nota válida.");
    }
} while (nota < 0 || nota > 10 || isNaN(nota));

alert("Nota válida: " + nota);
