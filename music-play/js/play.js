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
    inicio.innerHTML = Math.floor(audio.currentTime)
    inicio.innerHTML = currentTimeMusic(Math.floor(audio.currentTime))
    fim.innerHTML = currentTimeMusic(Math.floor(audio.duration))
})

currentTimeMusic = (event) => {
    let Minutos = Math.floor(event / 60)
    let Segundos = event % 60
    if(Segundos < 10){
        Segundos = '0' + Segundos
    }
    return Minutos + ':' + Segundos
}