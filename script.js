const botoesNumeros = document.querySelectorAll(".botao-numero");
const visor = document.getElementById("resultado");
const botoesOperadores = document.querySelectorAll(".botao-operador");
const botaoIgual = document.querySelector(".botao-igual");
const botaoLimpar = document.querySelector(".botao-limpar");
const botaoApagar = document.querySelector(".botao-apagar");

let primeiroNumero = "";
let operador = "";
let segundoNumero = "";

for (let i = 0; i < botoesNumeros.length; i++) {
  let botao = botoesNumeros[i];

  botao.addEventListener("click", function () {
    let valor = botao.getAttribute("data-valor");

    if (valor === "." && visor.innerText.includes(".")) {
      return;
    }

    if (visor.innerText === "0" && valor !== ".") {
      visor.innerText = valor;
    } else {
      visor.innerText += valor;
    }
  });
}

for (let x = 0; x < botoesOperadores.length; x++) {
  let botaoOp = botoesOperadores[x];

  botaoOp.addEventListener("click", function () {
    primeiroNumero = visor.innerText;
    operador = botaoOp.getAttribute("data-operador");
    visor.innerText = "0";
  });
}

botaoIgual.addEventListener("click", function () {
  let resultadoCalculado = 0;
  segundoNumero = visor.innerText;

  if (operador === "+") {
    resultadoCalculado = Number(primeiroNumero) + Number(segundoNumero);
  } else if (operador === "-") {
    resultadoCalculado = Number(primeiroNumero) - Number(segundoNumero);
  } else if (operador === "*" || operador === "x") {
    resultadoCalculado = Number(primeiroNumero) * Number(segundoNumero);
  } else if (operador === "/") {
    resultadoCalculado = Number(primeiroNumero) / Number(segundoNumero);
  }

  visor.innerText = resultadoCalculado;
});

botaoLimpar.addEventListener("click", function () {
  primeiroNumero = "";
  operador = "";
  segundoNumero = "";
  visor.innerText = "0";
});

botaoApagar.addEventListener("click", function () {
  if (visor.innerText.length > 1) {
    visor.innerText = visor.innerText.slice(0, -1);
  } else {
    visor.innerText = "0";
  }
});
