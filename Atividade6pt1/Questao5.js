let populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB;

do {
    populacaoA = parseInt(prompt("Digite a população do país A:"));
    populacaoB = parseInt(prompt("Digite a população do país B:"));
    taxaCrescimentoA = parseFloat(prompt("Digite a taxa de crescimento anual do país A (em %):"));
    taxaCrescimentoB = parseFloat(prompt("Digite a taxa de crescimento anual do país B (em %):"));

    if (populacaoA <= 0 || populacaoB <= 0 || taxaCrescimentoA <= 0 || taxaCrescimentoB <= 0) {
        alert("Valores inválidos. Populações e taxas de crescimento devem ser maiores que zero.");
    }
} while (populacaoA <= 0 || populacaoB <= 0 || taxaCrescimentoA <= 0 || taxaCrescimentoB <= 0);

let anos = 0;
while (populacaoA < populacaoB) {
    populacaoA *= 1 + (taxaCrescimentoA / 100);
    populacaoB *= 1 + (taxaCrescimentoB / 100);
    anos++;
}

alert("Serão necessários " + anos + " anos para a população do país A ultrapassar ou igualar a população do país B.");
