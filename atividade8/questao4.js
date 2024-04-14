function tribonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    }
}

let N = 7;
let resultado = tribonacci(N);
console.log("O", N + "-ésimo número da sequência de Tribonacci é:", resultado);
