let inputs = document.querySelectorAll('input')
let btnproximo = document.querySelector('.img_proximo button')
let img_proximobuttoni = document.querySelector('.img_proximo button i')


const handleChange = () => {
    const [username, passowrs] = inputs

    if(username.value && passowrs.value.length >= 8){
        btnproximo.removeAttribute('disabled')
        img_proximobuttoni.style.color = '#f2f2f2'
    }else{
        btnproximo.setAttribute('disabled','')
        img_proximobuttoni.style.color = 'rgba(128, 128, 128, 0.192)'
    }
}
inputs.forEach((input) => input.addEventListener('input', handleChange))