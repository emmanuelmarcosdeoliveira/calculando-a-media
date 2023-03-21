const form = document.getElementById("form-atividade");
const imgAprovado =
  '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado =
  '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputnomeAtividade = document.getElementById("atv");
  const inputnotaAtividade = document.getElementById("natv");

  let linha = "<tr>";
  linha += `<td>${inputnomeAtividade.value}</td>`;
  linha += `<td>${inputnotaAtividade.value}</td>`;
  linha += `<td>${
    inputnotaAtividade.value >= 7 ? imgAprovado : imgReprovado
  }</td>`;
  linha += `</tr>`;

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
});
