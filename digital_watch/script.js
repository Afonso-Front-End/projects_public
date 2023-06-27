setInterval(() => {
  // Captudando dados das horas
  let date = new Date();
  let hora = date.getHours();
  let minutos = date.getMinutes();
  let segundos = date.getSeconds();
  // Capturando elementos da hora minuto e segundos e AM-PM
  let phora = document.getElementById("hora");
  let pminutos = document.getElementById("minutos");
  let psegundos = document.getElementById("segundos");
  let AMPM = document.getElementById("AM_PM");
  // Capturar elementos da dia mes e ano
  let pdia = document.getElementById("dia");
  let pmes = document.getElementById("mes");
  let pano = document.getElementById("ano");
  let pdiasemana = document.getElementById("dia_semana");
  // Capturando dados do mes
  let diasemana = date.toLocaleString(`pt-br`, { weekday: `long` });
  let dia = date.getDate();
  let mes = date.toLocaleString(`pt-br`, { month: `long` });
  let ano = date.getFullYear();

  pmes.innerText = mes;
  pano.innerText = ano;
  pdiasemana.innerText = diasemana;
  
  // Condicional para adiconar e mostrar a hora caso algum numero precise de um `0` na frente
  if (hora >= 12) {
    AMPM.innerText = `AM`;
  } else {
    AMPM.innerText = `PM`;
  }
  if (dia <= 9) {
    pdia.innerText = `0${dia}`;
  } else {
    pdia.innerText = `${dia}`;
  }
  if (hora <= 9) {
    phora.innerText = `0${hora}`;
  } else {
    phora.innerText = `${hora}`;
  }
  if (minutos <= 9) {
    pminutos.innerText = `0${minutos}`;
  } else {
    pminutos.innerText = `${minutos}`;
  }
  if (segundos <= 9) {
    psegundos.innerText = `0${segundos}`;
  } else {
    psegundos.innerText = `${segundos}`;
  }
}, 1000);
