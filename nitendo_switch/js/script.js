const clickB = document.querySelector('#btnBclick')
const clickA = document.querySelector('#btnAclick')
const clickY = document.querySelector('#btnYclick')
const clickHome = document.querySelector('#btnHOMEclick')

const url = 'https://github.com/FonssoGit'
const url2 = 'https://github.com/FonssoGit/NitendoSwitch'

//controle esquerdo
let controleesquerdo = document.querySelector('.controle-esquerdo')
let l1Animation = document.querySelector('.l1')
//
//controle direito
let controledireito = document.querySelector('.controle-direito')
let r1Animation = document.querySelector('.r1')
//
//carcaça
let carcacaAnimation = document.querySelector('.carcaca')
//
//Tela
let tela = document.querySelector('.tela')
//
//Tela secundaria
let telasecundaria = document.querySelector('.tela-secundaria')
//
//Tela Principal
let telaprincipal = document.querySelector('.tela-principal')
//
//Encaixe
let encaixe = document.querySelector('.encaixe')
//
//Volume
let volume = document.querySelector('.volume')
//Detalhe
let detalhe = document.querySelector('.detalhe')

clickB.addEventListener('click',()=>{
    if(controleesquerdo.classList.contains('controle-esquerdo-animation')){
        controledireito.classList.contains('controle-direito-animation')
        l1Animation.classList.contains('l1-animation')
        r1Animation.classList.contains('r1-animation')
        carcacaAnimation.classList.contains('carcaca-animation')
        tela.classList.contains('tela-animation')
        telasecundaria.classList.contains('tela-secundaria-animation')
        telaprincipal.classList.contains('tela-principal-animation')
        encaixe.classList.contains('encaixe-animation')
        volume.classList.contains('volume-animation')
        detalhe.classList.contains('detalhe-animation')
    }else{
        controledireito.classList.add('controle-direito-animation')
        controleesquerdo.classList.add('controle-esquerdo-animation')
        l1Animation.classList.add('l1-animation')
        r1Animation.classList.add('r1-animation')
        carcacaAnimation.classList.add('carcaca-animation')
        tela.classList.add('tela-animation')
        telasecundaria.classList.add('tela-secundaria-animation')
        telaprincipal.classList.add('tela-principal-animation')
        encaixe.classList.add('encaixe-animation')
        volume.classList.add('volume-animation')
        detalhe.classList.add('detalhe-animation')
    }
})

clickA.addEventListener('click',()=>{
    l1Animation.classList.remove('l1-animation')
    controleesquerdo.classList.remove('controle-esquerdo-animation')
        
    r1Animation.classList.remove('r1-animation')
    controledireito.classList.remove('controle-direito-animation')

    carcacaAnimation.classList.remove('carcaca-animation')
    tela.classList.remove('tela-animation')
    telasecundaria.classList.remove('tela-secundaria-animation')
    telaprincipal.classList.remove('tela-principal-animation')
    encaixe.classList.remove('encaixe-animation')
    volume.classList.remove('volume-animation')
    detalhe.classList.remove('detalhe-animation')
})
clickY.addEventListener('click',()=>{
    const wind = window.open(url, '_blank')
    wind.focus()
})

clickHome.addEventListener('click',()=>{
    const win = window.open(url2, '_blank')
    win.focus()
})
let bordaanalogicocentercenter = document.getElementById('borda-analogico-center-center')
let bordaanalogicocentercenterdireito = document.getElementById('borda-analogico-center-center-direito')
let analogico = document.getElementById('analogico')
let analogicodireito = document.getElementById('analogico-direito')

let a = 0
let z = 0;
analogico.addEventListener('mousemove',(e)=>{
   
    z = e.movementX
    a = e.movementY
   
    if(z == 1){
        bordaanalogicocentercenter.style.left = '15px'
        bordaanalogicocentercenter.style.top = '0px'
    }
    if(z == -1){
        bordaanalogicocentercenter.style.left = '-15px'
        bordaanalogicocentercenter.style.top = '0px'
    }
    if(a == 1){
        bordaanalogicocentercenter.style.left = '0px'
        bordaanalogicocentercenter.style.top = '15px'
    }
    if(a == -1){
        bordaanalogicocentercenter.style.left = '0px'
        bordaanalogicocentercenter.style.top = '-15px'
    }   
})


analogicodireito.addEventListener('mousemove',(e)=>{
    x = e.offsetX;
    y = e.offsetY;
    z = e.movementX
    a = e.movementY
   
    if(z == 1){
        bordaanalogicocentercenterdireito.style.left = '15px'
        bordaanalogicocentercenterdireito.style.top = '0px'
    }
    if(z == -1){
        bordaanalogicocentercenterdireito.style.left = '-15px'
        bordaanalogicocentercenterdireito.style.top = '0px'
    }
    if(a == 1){
        bordaanalogicocentercenterdireito.style.left = '0px'
        bordaanalogicocentercenterdireito.style.top = '15px'
    }
    if(a == -1){
        bordaanalogicocentercenterdireito.style.left = '0px'
        bordaanalogicocentercenterdireito.style.top = '-15px'
    }   
})





analogico.addEventListener('mouseout',()=>{
    bordaanalogicocentercenter.style.left = '0px'
    bordaanalogicocentercenter.style.top = '0px'

})
analogicodireito.addEventListener('mouseout',()=>{
    bordaanalogicocentercenterdireito.style.left = '0px'
    bordaanalogicocentercenterdireito.style.top = '0px'

})
