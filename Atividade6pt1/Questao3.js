let nome, idade, salario, sexo, estadoCivil;

do {
    nome = prompt("Digite seu nome:");
} while (nome.length <= 3);

do {
    idade = parseInt(prompt("Digite sua idade:"));
} while (idade < 0 || idade > 150 || isNaN(idade));

do {
    salario = parseFloat(prompt("Digite seu salário:"));
} while (salario <= 0 || isNaN(salario));

do {
    sexo = prompt("Digite seu sexo (f/m):").toLowerCase();
} while (sexo !== 'f' && sexo !== 'm');

do {
    estadoCivil = prompt("Digite seu estado civil (s/c/v/d):").toLowerCase();
} while (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd');

alert("Informações válidas: \nNome: " + nome + "\nIdade: " + idade + "\nSalário: " + salario + "\nSexo: " + sexo + "\nEstado Civil: " + estadoCivil);
