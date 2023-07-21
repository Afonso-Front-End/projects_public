const audio  = document.querySelector('audio')
let fim = document.getElementById('fim')
play = () => {
    audio.play()
    pauser.style.display = 'flex'
    player.style.display = 'none'
} 

pause = () => {
    audio.pause()
    pauser.style.display = 'none'
    player.style.display = 'flex'
}

audio.addEventListener('timeupdate',()=>{
    let progress = document.querySelector('progress')
    progress.style.width = Math.floor((audio.currentTime / audio.duration)* 100)+ '%'
    inicio.innerHTML = currentTimeMusic(Math.floor(audio.currentTime))
    fim.innerHTML = currentTimeMusic(Math.floor(audio.duration))
})
audio.addEventListener('ended',()=> {
    proximo()
})

currentTimeMusic = (event) => {
    let Minutos = Math.floor(event / 60)
    let Segundos = event % 60
    if(Segundos < 10){
        Segundos = '0' + Segundos
    }
    return Minutos + ':' + Segundos
}

barra.addEventListener('click',(event)=>{
    let progressbar = barra.clientWidth
    let clickevento = event.offsetX
    let durationaudio = audio.duration
    audio.currentTime = (clickevento/progressbar)* durationaudio
    // audio.play()
    pauser.style.display = 'flex'
    player.style.display = 'none'
    
})