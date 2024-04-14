function somaSerie(N) {
    if (N === 1) {
        return 1;
    } else {
        return 1 / N + somaSerie(N - 1);
    }
}

// Exemplo de uso
let N = 5;
let resultado = somaSerie(N);
console.log("A soma da série até", N, "é:", resultado);
