const addressForm = document.querySelector('#address-form')
const cepInput = document.querySelector('#cep')
const addressInput = document.querySelector('#address')
const cityImput = document.querySelector('#city')
const neighborhoodInput = document.querySelector('#neighborood')
const regionInput = document.querySelector('#region')

const formInput = document.querySelectorAll('[data-input]')

const closeButton = document.querySelector('#clonse-mesage')

const fadeElement = document.querySelector('#fade')

//validar cep input
cepInput.addEventListener('keypress',(e)=>{
    const onlyNumber = /[0-9]/
    const key = String.fromCharCode(e.keyCode)
    //alow only number
    if(!onlyNumber.test(key)){
        e.preventDefault()
        return
    }
})

//get addres event
cepInput.addEventListener('keyup',(e)=>{
    const inputValue = e.target.value

    //check if have correct lenght
    if(inputValue.length === 8){
        getAdrees(inputValue) 
    }
})

//get custorms address from API
const getAdrees = async (cep) =>{
    toggleLoader()
    cepInput.blur()

    const apiURL = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(apiURL)

    const data = await response.json()
    //show error and reset form

    if(data.erro === 'true'){
        if(!addressInput.hasAttribute('disabled')){
            toggleDisable()
        }
        addressForm.reset();
        toggleLoader()
        toggleMensage('CEP invalido, tente novamente');
        //show mensage
        return;
    }
    


    if(addressInput.value === ''){
        toggleDisable()
    }
    addressInput.value = data.logradouro
    cityImput.value = data.localidade
    neighborhoodInput.value = data.bairro
    regionInput.value = data.uf


    toggleLoader()
}

//add or remove disable atribute
const toggleDisable = ()=>{

    if(regionInput.hasAttribute('disabled')){
        formInput.forEach((input)=>{
            input.removeAttribute('disabled')
        })
    }else{
        formInput.forEach((input) =>{
            input.setAttribute('disabled','disabled')
        })
    }
}

//Show or hide loader
const toggleLoader = ()=>{
    const fadeElement = document.querySelector('#fade')
    const loaderElement = document.querySelector('#loader')

    fadeElement.classList.toggle('hide')
    loaderElement.classList.toggle('hide')
}

//show or hide mensage
const toggleMensage = (msg) =>{
    const mensageElemt = document.querySelector('#message')

    const mensageElemtText = document.querySelector('#message p')

    mensageElemtText.innerText = msg

    fadeElement.classList.toggle('hide')
    mensageElemt.classList.toggle('hide')
}

//closse mesage modal
closeButton.addEventListener('click',()=> toggleMensage())

//save address

addressForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    toggleLoader()

    setTimeout(()=>{
        toggleLoader()
        toggleMensage('Endereço salvo com sucesso')

        addressForm.reset();
        toggleDisable()
        
    }, 1500)
    
})