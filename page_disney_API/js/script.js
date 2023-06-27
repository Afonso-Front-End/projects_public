const menuIconClick = document.querySelector('.menu_icon span')

function togleMenu(){
    const main = document.querySelector('main')
    const nav = document.querySelector('nav')
    nav.classList.toggle('active')
    main.classList.toggle('active')
}
menuIconClick.addEventListener('click',togleMenu)



const keyApi = `363c5d1969f7741089a136755e8cf14b`
let listMovie = [
    `tt3480822`,
    `tt5109280`,
    `tt2948372`,
    `tt2380307`,
    `tt0910970`
]
//`https://api.themoviedb.org/3/movie/${filmeID}?api_key=<<${keyApi}>>&language=pt-BR`
function getURLmovie(filmeID){
    return `https://api.themoviedb.org/3/movie/${filmeID}?api_key=${keyApi}&language=pt-BR`
}
function SetFeatureApi(filmeID){
    fetch(getURLmovie(filmeID))
    .then(response => response.json()).then( data => {
    console.log(data)
    const imgContainer = document.querySelector('.container')
    const imagem = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`

    const avaliacao = document.querySelector('.rating p')
    avaliacao.innerHTML = `${data.vote_average}`

    const genero = document.querySelector('.date_genre h4')
    genero.innerHTML = `${data.genres[0].name}  ${data.genres[1].name }`

    const date = document.querySelector('.date_genre span')
    date.innerHTML = `${data.release_date}`


    const titulo = document.querySelector('.title h1')
    titulo.innerHTML = `${data.original_title}`

    const descricao = document.querySelector('.title p')
    descricao.innerHTML = `${data.overview}`

    imgContainer.style.backgroundImage = `linear-gradient(
        rgba(0,0,0,0.3),
        rgba(0,0,0,0.3)),url(${imagem})`
    })
}

function creatBtnOnclick(filmeID) {
    const btnOnclick = document.createElement('button')
    btnOnclick.setAttribute('onclick',`SetFeatureApi('${filmeID}')`)
    btnOnclick.innerHTML = `<i class="bi bi-play-fill"></i>`
    return btnOnclick
}


const ul = document.querySelector('ul')
function criarFilme(filmeID){
    fetch(getURLmovie(filmeID))
    .then( response => response.json())
    .then( data => {
        const filme = document.createElement('li')
        const title = `<h3>${data.original_title}</h3>`
        const genero = `<h4>${data.genres[0].name}</h4>`
        const imagem = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
        
        filme.innerHTML = title + genero
        filme.style.backgroundImage = `linear-gradient(
            to left bottom,
            rgba(0,0,0,0.3),
            rgba(0,0,0,0.3)),url(${imagem}`

        filme.appendChild(creatBtnOnclick(filmeID))
        ul.appendChild(filme)
        filme.appendChild(creatBtnOnclick(filmeID))
    })
}

function recarregarlista(){
    listMovie.map(criarFilme)
}
recarregarlista()
SetFeatureApi(listMovie[0])