var hora = 0
var minutos = 0
var segundos = 0

var cron;
function iniciar(){
    cron = setInterval(() =>{
        timer(1000)
})
}
function pausar(){
    clearInterval(cron)
}
function parar(){
    clearInterval(cron)
    hora = 0
    minutos = 0
    segundos = 0
    document.querySelector('.contador').innerHTML = `00:00:00`
}
function timer(){
    segundos ++
    if(segundos == 60){
        segundos = 0
        minutos++
    }
    if(minutos == 60){
        minutos = 
        hora++
    }
    var formatar = 
    (hora < 10 ? '0' + hora : hora)+
     ':' +
    (minutos < 10 ? '0' + minutos : minutos)+
     ':' +
    (segundos < 10 ? '0' + segundos : segundos)
    document.querySelector('.contador').innerHTML = formatar
}