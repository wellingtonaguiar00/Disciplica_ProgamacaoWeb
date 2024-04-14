function somaAteN(N) {
    if (N === 1) {
        return 1;
    } else {
        return N + somaAteN(N - 1);
    }
}

let N = 5;
let resultado = somaAteN(N);
console.log("A soma dos números de 1 até", N, "é:", resultado);
