const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const placar = document.querySelector('.placar h1')
var gameBoard = document.querySelector('.game-board')
const recarregar = document.querySelector('.recarregar')
const novo = document.getElementById('novo')
const play = document.querySelector('.play')
let btnPlay = document.querySelector('.btn-play button')
let pontoPlacar = 0






const jump = () =>{
    mario.classList.add('jump')
    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 500)
    pontoPlacar ++
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    const cloudsPosition = clouds.offsetLeft
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = `none`
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = `none`
        mario.style.bottom  = `${marioPosition}px`
        mario.src = './img/mario-jump-images/game-over.png'
        mario.style.width = '70px'
        mario.style.marginLeft = '50px'
        clouds.style.animation = `none`
        clouds.style.left  = `${cloudsPosition}px`
        clearInterval(loop)
        recarregar.style.display = 'flex'
    }
    if(marioPosition >= pipePosition ){ 
        placar.innerHTML = `0${pontoPlacar }`
    }

}, 10)
function renderizar(){
    recarregar.style.display = 'none'
    window.location.reload()
    play.style.display = 'none'
}

novo.addEventListener('click',()=>{
    renderizar()
})

window.onload = function() {
     var segundos = 4;
     setTimeout(function () {
        
     }, segundos * 1000);
};


gameBoard.addEventListener('click',()=>{
    mario.classList.add('jump')
    pontoPlacar ++
    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 400)
})

document.addEventListener('keydown', jump)