play = () => {
    audio.play()
    pauser.style.display = 'block'
    player.style.display = 'none'
}

pause = () => {
    audio.pause()
    pauser.style.display = 'none'
    player.style.display = 'block'
}

audio.addEventListener('timeupdate',()=>{
    let progress = document.querySelector('progress')
    progress.style.width = Math.floor((audio.currentTime / audio.duration)* 100)+ '%'
    inicio.innerHTML = Math.floor(audio.currentTime)
    inicio.innerHTML = currentTimeMusic(Math.floor(audio.currentTime))
    fim.innerHTML = currentTimeMusic(Math.floor(audio.duration))
})

currentTimeMusic = (segundos) => {
    let Minutos = Math.floor(segundos / 60)
    let Segundos = segundos % 60
    if(Segundos < 10){
        Segundos = '0' + Segundos
    }
    return Minutos + ':' + Segundos
}