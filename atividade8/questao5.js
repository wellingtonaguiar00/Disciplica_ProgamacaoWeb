function pell(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return 2 * pell(n - 1) + pell(n - 2);
    }
}

let N = 7;
let resultado = pell(N);
console.log("O", N + "-ésimo número de Pell é:", resultado);
