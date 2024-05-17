let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA *= 1.03;
    populacaoB *= 1.015;
    anos++;
}

alert("Serão necessários " + anos + " anos para a população do país A ultrapassar ou igualar a população do país B.");
