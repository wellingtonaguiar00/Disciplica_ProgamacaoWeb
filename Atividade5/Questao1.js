function exibirMensagemBoasVindas() {
    var nomeUsuario = prompt("Qual é o seu nome?");

    if (nomeUsuario) {
        alert("Olá, " + nomeUsuario + "! Bem-vindo à nossa página.");
    } else {
        alert("Bem-vindo à nossa página!");
    }
}

window.onload = exibirMensagemBoasVindas;
