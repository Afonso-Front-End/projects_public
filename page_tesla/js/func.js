let title = document.getElementById('title')
let paragrafo = document.getElementById('paragrafo')

let btnClick = document.getElementById('btnClick')
let btnClosed = document.getElementById('closed')

let body = document.querySelector('body')
let areaModalMenu = document.querySelector('.container-menu-descktop')


let clickOpen = () => {
    areaModalMenu.style.left = '-0%'
    areaModalMenu.style.opacity = '1'
    body.style.overflow = 'hidden'
}
let clickClosed = () => {
    areaModalMenu.style.left = '100%'
    body.style.overflow = 'auto'
}

btnClick.addEventListener('click', clickOpen)
btnClosed.addEventListener('click', clickClosed)

let model3 = document.querySelector('.model-3')

document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY
    console.log(scrollTop)

   if ( scrollTop == model3) {
    console.log('teste')
   }
})



