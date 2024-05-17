let nomeUsuario, senha;

do {
    nomeUsuario = prompt("Digite o nome de usuário:");
    senha = prompt("Digite a senha:");
    if (nomeUsuario === senha) {
        alert("Erro: a senha não pode ser igual ao nome de usuário. Tente novamente.");
    }
} while (nomeUsuario === senha);

alert("Nome de usuário e senha aceitos.");
