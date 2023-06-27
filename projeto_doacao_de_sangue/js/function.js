pegarCampo = (campo) => {
  return document.querySelector(campo);
};

let buton = pegarCampo("#btn_button");
let nome = pegarCampo("#nome");
let sobreNome = pegarCampo("#sobre_nome");
let data = pegarCampo("#data");

let genero = pegarCampo("#genero");
let email = pegarCampo("#email");
let senha = pegarCampo("#senha");

let telefone = pegarCampo("#telefone");
let celular = pegarCampo("#celular");
let cep = pegarCampo("#cep");

let endereco = pegarCampo("#endereco");
let cidade = pegarCampo("#cidade");
let voluntario = pegarCampo("#voluntario");

let tipsangue = pegarCampo("#tipo_sanguineo");

adicionarTbody = () => {
  let tbody = document.querySelector("tbody");
  let tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${nome.value}</td>
        <td>${sobreNome.value}</td>
        <td>${data.value}</td>
        <td>${genero.value}</td>
        <td>${email.value}</td>
        <td>${senha.value}</td>
        <td>${telefone.value}</td>
        <td>${celular.value}</td>
        <td>${cep.value}</td>
        <td>${endereco.value}</td>
        <td>${cidade.value}</td>
        <td>${voluntario.value}</td>
        <td>${tipsangue.value}</td>
    `;
  if (nome.value == "") {
    alert("Digite seu nome");
    nome.focus();
  } else if (sobreNome.value == "") {
    alert("Digite seu sobre nome");
    sobreNome.focus();
  } else if (data.value == "") {
    alert("Digite a data de nascimento");
    data.focus();
  } else if (genero.value == "") {
    alert("Digite seu genero");
    genero.focus();
  } else if (email.value == "") {
    alert("Digite seu email");
    email.focus();
  } else if (senha.value == "") {
    alert("Digite sua senha");
    senha.focus();
  } else if (telefone.value == "") {
    alert("Digite seu telefone");
    telefone.focus();
  } else if (celular.value == "") {
    alert("Digite o numero do seu celular");
    celular.focus();
  } else if (cep.value == "") {
    alert("Digite seu cep");
    cep.focus();
  } else if (endereco.value == "") {
    alert("Digite seu endereço");
    endereco.focus();
  } else if (cidade.value == "") {
    alert("Digite sua cidade");
    cidade.focus();
  } else if (voluntario.value == "") {
    alert("Escreva se voce e voluntario");
    voluntario.focus();
  } else if (tipsangue.value == "") {
    alert("Digite seu tipo sanguineo");
    tipsangue.focus();
  } else {
    tbody.appendChild(tr);
  }
};
adicionarTfoot = () => {
  let tfoot = document.querySelector("tfoot");
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${nome.value}</td>
    <td>${tipsangue.value}</td>
    `;
  if (nome.value == "") {
  } else if (tipsangue.value == "") {
  } else {
    tfoot.appendChild(tr);
  }
};

click = (e) => {
  e.preventDefault();
  adicionarTbody();
  adicionarTfoot();
};

buton.addEventListener("click", click);
