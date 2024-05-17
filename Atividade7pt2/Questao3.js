let n = parseInt(prompt("Digite a quantidade de termos da série de Fibonacci que deseja gerar:"));
let primeiro = 0;
let segundo = 1;
let proximo;

console.log("Série de Fibonacci:");

for (let i = 0; i < n; i++) {
    console.log(primeiro);
    proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;
}
