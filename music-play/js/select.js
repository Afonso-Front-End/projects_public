let lista = [
    {
        nome:'Fall Out Boy',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Fall Out Boy - Centuries (Official Music Video)(MP3_320K)-01.mp3',
        imagen:'img/imagineDragons/imagine-dragons-01.jpg'
    },
    {
        nome:'Bad Liar',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Bad Liar (Official Music Video)(MP3_320K)-02.mp3',
        imagen:'img/imagineDragons/imagine-dragons-02.jpg'
    },
    {
        nome:'Believer ',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Believer (Official Music Video)(MP3_320K)-03.mp3',
        imagen:'img/imagineDragons/imagine-dragons-03.jpg'
    },
    {
        nome:'Birds',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Birds (Animated Video)(MP3_320K)-04.mp3',
        imagen:'img/imagineDragons/imagine-dragons-04.jpg'
    },
    {
        nome:'Bones ',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Bones (Official Music Video)(MP3_320K)-05.mp3',
        imagen:'img/imagineDragons/imagine-dragons-05.jpg'
    },
    {
        nome:'Demons',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Demons (Official Video)(MP3_320K)-06.mp3',
        imagen:'img/imagineDragons/imagine-dragons-06.jpg'
    },
    {
        nome:'Follow You',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Follow You (Official Music Video)(MP3_320K)-07.mp3',
        imagen:'img/imagineDragons/imagine-dragons-07.jpg'
    },
    {
        nome:'Gold ',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Gold (Official Music Video)(MP3_320K)-08.mp3',
        imagen:'img/imagineDragons/imagine-dragons-08.jpg'
    },
    {
        nome:'I Bet My Life',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - I Bet My Life(MP3_320K)-09.mp3',
        imagen:'img/imagineDragons/imagine-dragons-09.jpg'
    },
    {
        nome:'Natural ',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Natural (Official Music Video)(MP3_320K)-10.mp3',
        imagen:'img/imagineDragons/imagine-dragons-10.jpg'
    },
    {
        nome:'Nothing Left To Say',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Nothing Left To Say (Art Film)(MP3_320K)-11.mp3',
        imagen:'img/imagineDragons/imagine-dragons-11.jpg'
    },
    {
        nome:'On Top Of The World ',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - On Top Of The World (Official Music Video)(MP3_320K)-12.mp3',
        imagen:'img/imagineDragons/imagine-dragons-12.jpg'
    },
    {
        nome:'Radioactive',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Radioactive(MP3_320K)-13.mp3',
        imagen:'img/imagineDragons/imagine-dragons-13.jpg'
    },
    {
        nome:'Roots',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Roots(MP3_320K)-14.mp3',
        imagen:'img/imagineDragons/imagine-dragons-14.jpg'
    },
    {
        nome:'Thunder',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Thunder(MP3_320K)-15.mp3',
        imagen:'img/imagineDragons/imagine-dragons-15.jpg'
    },
    {
        nome:'Whatever It Takes ',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Whatever It Takes (Official Music Video)(MP3_320K)-16.mp3',
        imagen:'img/imagineDragons/imagine-dragons-16.jpg'
    },
    {
        nome:'Wrecked ',
        sobre:'Imagine Dragons',
        musica:'music/imagineDragons/Imagine Dragons - Wrecked (Official Music Video)(MP3_320K)-17.mp3',
        imagen:'img/imagineDragons/imagine-dragons-17.jpg'
    },
]

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
    if(indexMusica >= lista.length){
        indexMusica = 0
    }
    renderMusica(indexMusica)
    pauser.style.display = 'flex'
    player.style.display = 'none'
}
  
