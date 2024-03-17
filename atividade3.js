function verificarSaldo(saldo) {
  if (saldo > 0) {
    console.log("Saldo positivo");
  } else {
    console.log("Saldo negativo");
  }
}

function realizarSaque(saldoAtual, valorSaque) {
  if (valorSaque <= saldoAtual) {
    saldoAtual -= valorSaque;
    console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
  } else {
    console.log("Saldo insuficiente");
  }
}

function realizarDeposito(saldoAtual, valorDeposito) {
  saldoAtual += valorDeposito;
  console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
}

function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {
  if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
    saldoOrigem -= valorTransferencia;
    saldoDestino += valorTransferencia;
    console.log("Transferência realizada com sucesso");
  } else if (valorTransferencia > saldoOrigem) {
    console.log("Saldo insuficiente para transferência");
  } else {
    console.log("Valor excede o limite de transferência");
  }
}

function checarChequeEspecial(saldo) {
  if (saldo < 0) {
    console.log("Dentro do limite do cheque especial");
  } else {
    console.log("Fora do limite do cheque especial");
  }
}

function atualizarCadastro(cadastroAtivo, saldo) {
  if (cadastroAtivo) {
    if (saldo > 0) {
      console.log("Cadastro ativo e saldo positivo");
    } else {
      console.log("Cadastro ativo mas precisa regularizar saldo");
    }
  } else {
    console.log("Por favor, atualize seu cadastro");
  }
}

function avaliarCredito(saldo, historicoCredito, rendaMensal) {
  if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
    console.log("Crédito aprovado");
  } else {
    console.log("Crédito negado");
  }
}

function exibirMenu() {
  console.log("=== Menu ===");
  console.log("1. Verificar Saldo");
  console.log("2. Realizar Saque");
  console.log("3. Realizar Depósito");
  console.log("4. Realizar Transferência");
  console.log("5. Checar Cheque Especial");
  console.log("6. Atualizar Cadastro");
  console.log("7. Avaliar Crédito");
  console.log("0. Sair");

  let opcao = parseInt(prompt("Escolha uma opção:"));

  switch (opcao) {
    case 1:
      let saldo = parseFloat(prompt("Digite seu saldo atual:"));
      verificarSaldo(saldo);
      break;
    case 2:
      let saldoAtualSaque = parseFloat(prompt("Digite seu saldo atual:"));
      let valorSaque = parseFloat(prompt("Digite o valor do saque:"));
      realizarSaque(saldoAtualSaque, valorSaque);
      break;
    case 3:
      let saldoAtualDeposito = parseFloat(prompt("Digite seu saldo atual:"));
      let valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
      realizarDeposito(saldoAtualDeposito, valorDeposito);
      break;
    case 4:
      let saldoOrigem = parseFloat(prompt("Digite o saldo da conta de origem:"));
      let saldoDestino = parseFloat(prompt("Digite o saldo da conta de destino:"));
      let valorTransferencia = parseFloat(prompt("Digite o valor da transferência:"));
      let limiteTransferencia = parseFloat(prompt("Digite o limite de transferência:"));
      realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia);
      break;
    case 5:
      let saldoChequeEspecial = parseFloat(prompt("Digite seu saldo atual:"));
      checarChequeEspecial(saldoChequeEspecial);
      break;
    case 6:
      let cadastroAtivo = confirm("Seu cadastro está ativo? (OK para sim, Cancelar para não)");
      let saldoAtualCadastro = parseFloat(prompt("Digite seu saldo atual:"));
      atualizarCadastro(cadastroAtivo, saldoAtualCadastro);
      break;
    case 7:
      let saldoAvaliacaoCredito = parseFloat(prompt("Digite seu saldo atual:"));
      let historicoCredito = confirm("Seu histórico de crédito é bom? (OK para sim, Cancelar para não)");
      let rendaMensal = parseFloat(prompt("Digite sua renda mensal:"));
      avaliarCredito(saldoAvaliacaoCredito, historicoCredito, rendaMensal);
      break;
    case 0:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}

exibirMenu();
