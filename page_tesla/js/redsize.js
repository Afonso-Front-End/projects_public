const title = document.getElementById("title");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const paragrafo = document.getElementById("paragrafo");
const section1 = document.querySelector(".model-3");
const section2 = document.querySelector(".model-Y");
const section3 = document.querySelector(".model-S");
const section4 = document.querySelector(".model-X");
const section5 = document.querySelector(".experience-tesla");
const section6 = document.querySelector(".telhado-solar");
const section7 = document.querySelector(".powerwall");
const section8 = document.querySelector(".conector");

// Variável para rastrear a seção atual
let currentSection = null;

// Função para verificar a seção atualmente visível na metade da visualização
function checkSectionPosition() {
  const section2Rect = section2.getBoundingClientRect();
  const section3Rect = section3.getBoundingClientRect();
  const section4Rect = section4.getBoundingClientRect();
  const section5Rect = section5.getBoundingClientRect();
  const section6Rect = section6.getBoundingClientRect();
  const section7Rect = section7.getBoundingClientRect();
  const section8Rect = section8.getBoundingClientRect();

  // Altura da janela de visualização
  const windowHeight = window.innerHeight;
  title.style.transition = 'all 0.5s linear'

  if (section2Rect.top <= windowHeight / 2 && section2Rect.bottom >= windowHeight / 2) {
    currentSection = "Modelo Y";
    paragrafo.innerText = 'A partir de $ 39.390'
    btn1.style.display = 'block'
    btn2.style.display = 'block'
    btn3.style.display = 'none'
  } else if (section3Rect.top <= windowHeight / 2 && section3Rect.bottom >= windowHeight / 2) {
    currentSection = "Modelo S";
    paragrafo.innerText = 'A partir de $ 71.090'
    btn1.style.display = 'block'
    btn2.style.display = 'block'
    btn3.style.display = 'none'
  } else if (section4Rect.top <= windowHeight / 2 && section4Rect.bottom >= windowHeight / 2) {
    currentSection = "Modelo X";
    paragrafo.innerText = 'A partir de $ 68.590'
    btn1.style.display = 'block'
    btn2.style.display = 'block'
    btn3.style.display = 'none'
  }
  else if (section5Rect.top <= windowHeight / 2 && section5Rect.bottom >= windowHeight / 2) {
    currentSection = "Experience Tesla";
    paragrafo.innerText = 'Schedule a Demo Drive Today'
    btn1.style.display = 'none'
    btn2.style.display = 'none'
    btn3.style.display = 'block'
  }else if (section6Rect.top <= windowHeight / 2 && section6Rect.bottom >= windowHeight / 2) {
    currentSection = "Telhado Solar";
    paragrafo.innerText = 'Produza energia limpa a partir do seu telhado'
    btn1.style.display = 'block'
    btn2.style.display = 'block'
    btn3.style.display = 'none'
  }else if (section7Rect.top <= windowHeight / 2 && section7Rect.bottom >= windowHeight / 2) {
    currentSection = "Parede elétrica";
    paragrafo.innerText = ''
    btn1.style.display = 'block'
    btn2.style.display = 'block'
    btn3.style.display = 'none'
  }else if (section8Rect.top <= windowHeight / 2 && section8Rect.bottom >= windowHeight / 2) {
    currentSection = "Acessórios";
    paragrafo.innerText = ''
    btn1.style.display = 'block'
    btn2.style.display = 'none'
    btn3.style.display = 'none'
  } else {
    currentSection = "Modelo 3";
    paragrafo.innerText = 'A partir de $ 29.740'
    btn1.style.display = 'block'
    btn2.style.display = 'block'
    btn3.style.display = 'none'
  }

  if (currentSection !== null && currentSection !== title.innerText) {
    title.innerText = currentSection;
  }
}

window.addEventListener("scroll", checkSectionPosition, (e) => {});

