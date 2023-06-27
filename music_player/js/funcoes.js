//addPlay

function addPlay(){
    play.style.display = 'block'
    pause.style.display = 'none'
}
//addPause
function addPause(){
    pause.style.display = 'block'
    play.style.display = 'none'
}

//Transformando os segundos em minutos
function segundosEminutos(segundos){
    let Minutos = Math.floor(segundos / 60)
    let Segundos = segundos % 60
    if(Segundos < 10){
        Segundos = '0' + Segundos
    }
    return Minutos + ':' + Segundos
}

//Play automatico
function playAutomatico(){
    musica.play()
}
//redenrizar musica
let indexMusica = 0
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].srcMusica)
    musica.addEventListener('loadeddata',()=>{
        nomeDaMusica.innerHTML =  musicas[index].tituloDaMusica
        nomeDoArtista.innerHTML = musicas[index].tituloDoArtista
        imgcardplay.src = musicas[index].imgCard
        inicio.innerHTML = segundosEminutos(Math.floor(musica.currentTime)
        )
        fim.innerHTML = segundosEminutos(Math.floor(musica.duration))
        playAutomatico()
    })
}