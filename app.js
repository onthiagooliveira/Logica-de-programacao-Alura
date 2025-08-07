// Manipulando o DOM
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let inputUser = document.querySelector("input");
let reiniciar = document.getElementById("reiniciar");

// Gerando o número secreto
let listaNumSorteados = [];
let numLimite = 10;
let numVerificado = gerarNumeroSecreto();
let nroTentativas = 1;

// Funções matemáticas

// Gera um número inteiro aleatório entre 1 e 10 (inclusive)
function gerarNumeroSecreto() {
  let numeroSecreto = parseInt(Math.random() * numLimite + 1);
  let qtdElementsLista = listaNumSorteados.length;

  if (qtdElementsLista == numLimite) {
    listaNumSorteados = [];
  }

  if (listaNumSorteados.includes(numeroSecreto)) {
    return gerarNumeroSecreto();
  } else {
    listaNumSorteados.push(numeroSecreto);
    return numeroSecreto;
  }
}

// Funções de manipulação de strings
function print(element, textDescript) {
  element.textContent = textDescript;
}

function concordanciaVerbal(nroInt, strSingular, strPlural) {
  return nroInt > 1 ? strPlural : strSingular;
}

// Funções lógicas
function verificarChute() {
  let palpite = Number(inputUser.value);

  if (palpite !== numVerificado) {
    palpite > numVerificado
      ? print(p, "O número secreto é menor")
      : print(p, "O número secreto é maior");
    inputUser.value = "";
    inputUser.focus();
    nroTentativas++;
  } else {
    const mensagem = `Você acertou o número secreto com ${nroTentativas} ${concordanciaVerbal(
      nroTentativas,
      "tentativa",
      "tentativas"
    )}`;
    print(h1, "Acertoooooooou!");
    print(p, `${mensagem}`);
    reiniciar.removeAttribute("disabled");
  }
}

function reset() {
  print(h1, "O jogo da Advinhação");
  print(p, `Escolha um número entre 1 e ${numLimite}`);
  inputUser.value = "";
  numVerificado = gerarNumeroSecreto();
  nroTentativas = 1;
  reiniciar.setAttribute("disabled", true);
}
