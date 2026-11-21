

function getById(id) {
  return document.getElementById(id);
}

// Questão 1 - Classificar um número com if/else
function classificarNumero() {
  let texto = getById("campoNumero").value.trim();
  let saida = getById("saidaNumero");

  if (texto === "") {
    saida.innerText = "Digite um número.";
    return;
  }

  let numero = Number(texto);
  if (isNaN(numero)) {
    saida.innerText = "O valor informado não é um número.";
    return;
  }

  if (numero > 0) {
    saida.innerText = "O número é positivo.";
  } else if (numero < 0) {
    saida.innerText = "O número é negativo.";
  } else {
    saida.innerText = "O número é zero.";
  }
}

getById("btnNumero").addEventListener("click", classificarNumero);

// Questão 2 - Verificar aprovação com &&
getById("btnAprovacao").addEventListener("click", function () {
  let textoMedia = getById("campoMedia").value.trim();
  let textoFrequencia = getById("campoFrequencia").value.trim();
  let saida = getById("saidaAprovacao");

  if (textoMedia === "" || textoFrequencia === "") {
    saida.innerText = "Preencha os dois campos.";
    return;
  }

  let media = Number(textoMedia);
  let frequencia = Number(textoFrequencia);

  if (isNaN(media) || isNaN(frequencia)) {
    saida.innerText = "Digite valores numéricos.";
    return;
  }

  if (media < 0 || media > 10 || frequencia < 0 || frequencia > 100) {
    saida.innerText = "Média ou frequência fora do intervalo.";
    return;
  }

  if (media >= 7 && frequencia >= 75) {
    saida.innerText = "Aluno aprovado.";
  } else {
    saida.innerText = "Aluno não aprovado.";
  }
});

// Questão 3 - Verificar frete grátis com ||
getById("btnFrete").addEventListener("click", function () {
  let textoCompra = getById("campoCompra").value.trim();
  let cupom = getById("campoCupom").value.trim().toLowerCase();
  let saida = getById("saidaFrete");

  if (textoCompra === "") {
    saida.innerText = "Informe o valor da compra.";
    return;
  }

  let valor = Number(textoCompra);
  if (isNaN(valor) || valor < 0) {
    saida.innerText = "Informe um valor numérico não negativo.";
    return;
  }

  if (valor >= 100 || cupom === "frete") {
    saida.innerText = "Frete grátis.";
  } else {
    saida.innerText = "Frete pago.";
  }
});

// Questão 4 - Verificar bloqueio com !
getById("btnBloqueio").addEventListener("click", function () {
  let resposta = getById("campoBloqueio").value.trim().toLowerCase();
  let saida = getById("saidaBloqueio");

  if (resposta !== "sim" && resposta !== "nao") {
    saida.innerText = "Digite sim ou nao, sem acento.";
    return;
  }

  let bloqueado = resposta === "sim";

  if (!bloqueado) {
    saida.innerText = "Acesso permitido.";
  } else {
    saida.innerText = "Acesso bloqueado.";
  }
});

// Questão 5 - Identificar um turno com switch
getById("btnTurno").addEventListener("click", function () {
  let textoTurno = getById("campoTurno").value.trim();
  let saida = getById("saidaTurno");

  if (textoTurno === "") {
    saida.innerText = "Opção inválida. Digite 1, 2 ou 3.";
    return;
  }

  let turno = Number(textoTurno);

  switch (turno) {
    case 1:
      saida.innerText = "Turno: manhã.";
      break;
    case 2:
      saida.innerText = "Turno: tarde.";
      break;
    case 3:
      saida.innerText = "Turno: noite.";
      break;
    default:
      saida.innerText = "Opção inválida. Digite 1, 2 ou 3.";
  }
});

// Questão 6 - Gerar uma tabuada com for (1 a 10)
getById("btnTabuada").addEventListener("click", function () {
  let texto = getById("campoTabuada").value.trim();
  let saida = getById("saidaTabuada");

  if (texto === "") {
    saida.innerText = "Digite um número.";
    return;
  }

  let numero = Number(texto);
  if (isNaN(numero)) {
    saida.innerText = "Digite um valor numérico.";
    return;
  }

  saida.innerText = "";
  for (let i = 1; i <= 10; i++) {
    let produto = numero * i;
    saida.innerText += numero + " x " + i + " = " + produto + "\n";
  }
});

// Questão 7 - Fazer uma contagem regressiva com while
getById("btnContagem").addEventListener("click", function () {
  let texto = getById("campoContagem").value.trim();
  let saida = getById("saidaContagem");

  if (texto === "") {
    saida.innerText = "Informe o número inicial.";
    return;
  }

  let contador = Number(texto);
  if (!Number.isInteger(contador) || contador < 1 || contador > 100) {
    saida.innerText = "Digite um número inteiro de 1 a 100.";
    return;
  }

  saida.innerText = "";
  while (contador >= 0) {
    saida.innerText += contador + "\n";
    contador--;
  }
  saida.innerText += "Fim!";
});
