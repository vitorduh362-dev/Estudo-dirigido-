function getById(id) {
  return document.getElementById(id);
}

// Questão 1 - Controle de entrada em um evento
getById("btnEntrada").addEventListener("click", function () {
  let textoIdade = getById("campoIdade").value.trim();
  let ingresso = getById("campoIngresso").value.trim().toLowerCase();
  let convite = getById("campoConvite").value.trim().toLowerCase();
  let bloqueadaResp = getById("campoBloqueada").value.trim().toLowerCase();
  let saida = getById("saidaEntrada");

  saida.innerText = "";

  if (textoIdade === "" || ingresso === "" || convite === "" || bloqueadaResp === "") {
    saida.innerText = "Preencha todos os campos.";
    return;
  }

  let idade = Number(textoIdade);
  if (isNaN(idade) || !Number.isInteger(idade) || idade < 0) {
    saida.innerText = "Informe uma idade válida (número inteiro não negativo).";
    return;
  }

  let respostaValidaIngresso = ingresso === "sim" || ingresso === "nao";
  let respostaValidaConvite = convite === "sim" || convite === "nao";
  let respostaValidaBloqueada = bloqueadaResp === "sim" || bloqueadaResp === "nao";

  if (!respostaValidaIngresso || !respostaValidaConvite || !respostaValidaBloqueada) {
    saida.innerText = "Digite apenas sim ou nao nos campos de ingresso, convite e bloqueio.";
    return;
  }

  let temIngresso = ingresso === "sim";
  let temConvite = convite === "sim";
  let estaBloqueada = bloqueadaResp === "sim";

  if (idade >= 16 && (temIngresso || temConvite) && !estaBloqueada) {
    saida.innerText = "Entrada permitida.";
  } else {
    saida.innerText = "Entrada não permitida.";
  }
});

// Questão 2 - Calculadora com switch
getById("btnCalcular").addEventListener("click", function () {
  let textoNum1 = getById("campoNum1").value.trim();
  let textoNum2 = getById("campoNum2").value.trim();
  let operacao = getById("campoOperacao").value.trim();
  let saida = getById("saidaCalculadora");

  saida.innerText = "";

  if (textoNum1 === "" || textoNum2 === "") {
    saida.innerText = "Preencha os dois números.";
    return;
  }

  let num1 = Number(textoNum1);
  let num2 = Number(textoNum2);

  if (isNaN(num1) || isNaN(num2)) {
    saida.innerText = "Digite valores numéricos válidos.";
    return;
  }

  let resultado;

  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      saida.innerText = "Resultado: " + resultado;
      break;
    case "-":
      resultado = num1 - num2;
      saida.innerText = "Resultado: " + resultado;
      break;
    case "*":
      resultado = num1 * num2;
      saida.innerText = "Resultado: " + resultado;
      break;
    case "/":
      if (num2 === 0) {
        saida.innerText = "Erro: divisão por zero não é permitida.";
        return;
      }
      resultado = num1 / num2;
      saida.innerText = "Resultado: " + resultado;
      break;
    default:
      saida.innerText = "Operação desconhecida. Utilize +, -, * ou /.";
  }
});

// Questão 3 - Números pares e totalização com for
getById("btnPares").addEventListener("click", function () {
  let textoN = getById("campoLimiteN").value.trim();
  let saida = getById("saidaPares");

  saida.innerText = "";

  if (textoN === "") {
    saida.innerText = "Informe um número inteiro N de 1 a 100.";
    return;
  }

  let n = Number(textoN);
  if (!Number.isInteger(n) || n < 1 || n > 100) {
    saida.innerText = "Digite um número inteiro de 1 a 100.";
    return;
  }

  let pares = [];
  let quantidade = 0;
  let soma = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      pares.push(i);
      quantidade++;
      soma += i;
    }
  }

  if (quantidade === 0) {
    saida.innerText =
      "Não há números pares no intervalo.\n" +
      "Quantidade: 0\n" +
      "Soma: 0";
  } else {
    saida.innerText =
      "Números pares: " + pares.join(", ") + "\n" +
      "Quantidade: " + quantidade + "\n" +
      "Soma: " + soma;
  }
});

// Questão 4 - Simulação de economia com while
getById("btnSimular").addEventListener("click", function () {
  let textoMeta = getById("campoMeta").value.trim();
  let textoDeposito = getById("campoDeposito").value.trim();
  let saida = getById("saidaSimulacao");

  saida.innerText = "";

  if (textoMeta === "" || textoDeposito === "") {
    saida.innerText = "Preencha a meta e o depósito mensal.";
    return;
  }

  let meta = Number(textoMeta);
  let deposito = Number(textoDeposito);

  if (
    !Number.isInteger(meta) ||
    !Number.isInteger(deposito) ||
    meta < 1 ||
    meta > 10000 ||
    deposito < 1 ||
    deposito > 10000
  ) {
    saida.innerText = "Digite valores inteiros de 1 a 10.000 reais nos dois campos.";
    return;
  }

  let saldo = 0;
  let depositos = 0;
  let textoResultado = "";

  while (saldo < meta) {
    depositos++;
    saldo += deposito;
    textoResultado += "Depósito " + depositos + ": R$ " + saldo + "\n";
  }

  textoResultado += "Depósitos necessários: " + depositos + "\n";
  textoResultado += "Saldo final: R$ " + saldo;

  saida.innerText = textoResultado;
});
