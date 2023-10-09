let modall = document.querySelector(".modal");
let imgMenu = document.getElementById("imgMenu");
let containerCards = document.querySelector(".container-cards");


const container_modal = document.querySelector('.container-modal')
const modal = document.querySelector('.modal')
const listaGeracao = document.getElementById("listaGeracao");
const openMenu = () => {
  const header = document.querySelector("header");
  const content = document.querySelector(".content");
  header.classList.toggle("active");
  content.classList.toggle("active");
  
  if(container_modal.classList.contains('active')){
    container_modal.classList.remove('active')
  }
  
  if (listaGeracao.classList == "active") {
    listaGeracao.classList.remove("active");
  }
};
const openLista = () => {
  listaGeracao.classList.toggle("active");
  
};
reload = () => {
  window.location.reload();
};
const exite = () => {
  const container_modal = document.querySelector('.container-modal')
  const modal = document.querySelector('.modal')
  container_modal.classList.remove('active');
  modal.remove()
  // clear()
}

const fechar = document.getElementById('fechar')
const limpar = document.getElementById('limpar')
fechar.addEventListener('click', () => {
  resultPesquisa.classList.remove('active')
  input.value = ''
  kanto()
})
limpar.addEventListener('click', () => {
  listPesquisa.innerHTML = ''
  nomesPesquisados.splice(0);
  input.value = ''
  input.focus()
})
