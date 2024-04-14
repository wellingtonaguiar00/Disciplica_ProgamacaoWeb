function potencia(x, k) {
    if (k === 0) {
        return 1;
    } else if (k === 1) {
        return x;
    } else if (k < 0) {
        return 1 / potencia(x, -k);
    } else {
        let metade = potencia(x, Math.floor(k / 2));
        if (k % 2 === 0) {
            return metade * metade;
        } else {
            return x * metade * metade;
        }
    }
}

// Exemplo de uso
let x = 2;
let k = 5;
let resultado = potencia(x, k);
console.log(x + " elevado a " + k + " é:", resultado);
