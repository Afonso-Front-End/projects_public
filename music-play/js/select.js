let items = document.querySelector('.items')

for (let index = 0; index < lista.length; index++) {
    let item = `
        <li item-index="${index}" id="item">
            <div class="item-img">
                <img src="${lista[index].imagen}">
            </div>

            <div class="item-titulos">
                <h1>${lista[index].nome}</h1>
                <p>${lista[index].sobre}</p>
            </div>
            <audio id="audio" src="${lista[index].musica}"></audio>
        </li>
    `;

    items.insertAdjacentHTML('beforeend', item);
}


const slectItem =  document.querySelectorAll('li')

for (let j = 0; j < slectItem.length; j++) {
    if(slectItem[j].classList.add('playing')){
    }
    slectItem[j].setAttribute('onclick','clicked(this)')
}

clicked = (elemento) =>{
    let getItemIndex = elemento.getAttribute('item-index')
    indexMusica = getItemIndex
    renderMusica(indexMusica)
    audio.play()
    pauser.style.display = 'flex'
    player.style.display = 'none'
}

let indexMusica = 0;

renderMusica = (index) => {
    audio.setAttribute('src', lista[index].musica);
    audio.addEventListener('loadeddata', () => {
        let areaplayimg = document.getElementById('area-play-img');
        areaplayimg.style.backgroundImage = `url('${lista[index].imagen}')`;
        audio.play()
    });
} 

loadeMusica = () => {
    let areaplayimg = document.getElementById('area-play-img');

    function getRandomMusicAndImage() {
        const randomIndex = Math.floor(Math.random() * lista.length);
        const musicaAleatoria = lista[randomIndex].musica;
        const imagemAleatoria = lista[randomIndex].imagen;
        const titulo = lista[randomIndex].nome;
        const artista = lista[randomIndex].sobre;

        return { musica: musicaAleatoria, imagen: imagemAleatoria , nome: titulo, sobre: artista};
    }
    const { musica, imagen , nome , sobre} = getRandomMusicAndImage()

    audio.setAttribute('src', musica);

    const tempAudio = new Audio();

    tempAudio.src = musica;

    nomeMusica.innerHTML = nome

    nomeArtista.innerHTML = sobre

    tempAudio.addEventListener('loadedmetadata', () => {
        const durationSegundos = tempAudio.duration;
        const minutos = Math.floor(durationSegundos / 60);
        const segundos = Math.floor(durationSegundos % 60);
        fim.innerHTML = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    });

    areaplayimg.style.backgroundImage = `url('${imagen}')`;

}

voltar = () => {
    indexMusica --
    if(indexMusica < 0){
        indexMusica = lista.length - 1;
    }
    renderMusica(indexMusica)
    pauser.style.display = 'flex'
    player.style.display = 'none'

}

proximo = () => {
    indexMusica++
    if(indexMusica == lista.length){
        indexMusica = 0
    }
    renderMusica(indexMusica)
    pauser.style.display = 'flex'
    player.style.display = 'none'
}
  
