// Menu
albumimg.addEventListener('click',()=>{
    listamusicas.classList.contains('lista-musicas-open')
    if(listamusicas.classList.contains('lista-musicas-open')){
        
    }else{
        listamusicas.classList.add('lista-musicas-open')
    }
})
card.addEventListener('click',()=>{
    listamusicas.classList.add('lista-musicas-open')
})
parabaixo.addEventListener('click',()=>{
    listamusicas.classList.remove('lista-musicas-open')
})


paracimamenucardplay.addEventListener('click',()=>{
    if(cardplaymusica.classList.contains('card-play-musica-open')){

    }else{
        cardplaymusica.classList.add('card-play-musica-open')
        parabaixomenucardplay.style.display = 'block'
        paracimamenucardplay.style.display = 'none'
    }
})
parabaixomenucardplay.addEventListener('click',()=>{
    paracimamenucardplay.style.display = 'block'
    parabaixomenucardplay.style.display = 'none'
    cardplaymusica.classList.remove('card-play-musica-open')
})

//Script principal
//play da musica
play.addEventListener('click',()=>{ 
    pause.style.display = 'block'
    play.style.display = 'none'
    fim.innerHTML = segundosEminutos(Math.floor(musica.duration))
    renderizarMusica(indexMusica)
})
//pause da musica
pause.addEventListener('click', ()=>{
    addPlay()
    musica.pause() 
})

//verificar tamanho da musica e atualizar a barra progress
musica.addEventListener('timeupdate',()=>{
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration)* 100)+ '%'
    inicio.innerHTML = Math.floor(musica.currentTime)
    inicio.innerHTML = segundosEminutos(Math.floor(musica.currentTime))
})

//arrastar a barra progress
barra.addEventListener('click',(evente)=>{
    let progressbar = barra.clientWidth
    let clickevento = evente.offsetX
    let durationaudio = musica.duration
    musica.currentTime = (clickevento/progressbar)* durationaudio
    musica.play()
    addPause()
})

proxima.addEventListener('click',()=>{
    indexMusica++
    if(indexMusica > 16){
        indexMusica = 0
        
    }
    addPause()
    renderizarMusica(indexMusica)
})

voltar.addEventListener('click',()=>{
    indexMusica--
    if(indexMusica < 0){
        indexMusica = 16
    }
    addPause()
    renderizarMusica(indexMusica)

})
