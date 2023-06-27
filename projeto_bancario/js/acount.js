const back = () => {
    loader.style.display = 'flex'
    setInterval(() => {
        window.location.assign('/projeto_bancario/index.html')
    }, 1000);
}

const comfirm = () => {
    aviso.style.display = 'none'
}

const clear = () => {
    nome.value = ''
    email.value = ''
    cpf.value = ''
    senha.value = ''
}

cpf.addEventListener('input', function () {
    if (cpf.value.length > 11) {
        cpf.value = cpf.value.slice(0, 11);
    }
});

// Criar usuario // Validações
const create = () => {
    const regexnome = /^[A-Za-z\s]+$/;
    const regeemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const sequencia = '01234567890';

    // inicio validar nome
    // validar nome
    if (nome.value.trim() === '') {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'Nome está vazio.'
    }
    else if (!regexnome.test(nome.value)) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'O nome deve conter apenas letras.'
    }
    else if (nome.value.length < 2) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'O nome deve ter pelo menos 2 caracteres.'
    }
    // fim validar nome
    // inicio vlidar email
    else if (!regeemail.test(email.value)) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'Digite um e-mail válido.'
    }
    else if (cpf.value.length !== 11) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'CPF invalido.'
    }
    else if (/^(\d)\1+$/.test(cpf.value)) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'CPF com digitos iguais.'
    }
    else if (senha.value.length !== 4) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'A senha tem que conter 4 numeros.'
    } else if (!/^\d+$/.test(senha.value)) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'A senha tem que conter apenas numeros.'
    } else if (sequencia.includes(senha.value)) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'Não é permitido numeros sequenciais.'
    } else if (/(\d)\1\1\1/.test(senha.value)) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'Não é permitido numeros repetidos.'
    } else {
        addUser()
    }

}
// Adicionar usuario
const addUser = () => {
    let users = []
    if (localStorage.getItem('usuarios') != null) {
        users = JSON.parse(localStorage.getItem('usuarios'))
    }


    if (emailexistente(users, email.value) && cpfexistente(users, cpf.value)) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'O cpf e o email digitado já está cadastrado.'
        return;
    }
    else if (emailexistente(users, email.value)) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'O email digitado já está cadastrado.'
        return;
    }
    else if (cpfexistente(users, cpf.value)) {
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'O cpf digitado já está cadastrado.'
        return;
    } else {
        const capitalizeFirstLetter = (string)=> {   
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
          
        users.push({
            nome: capitalizeFirstLetter(nome.value),
            email: email.value.toLowerCase(),
            cpf: cpf.value,
            senha: senha.value,
            saldo: 5000,
        })
        localStorage.setItem('usuarios', JSON.stringify(users));
        aviso.style.display = 'flex'
        textaviso.innerHTML = 'Parabéns conta cadastrada! Volte para tela de login.'
        clear()
    }
}
let emailexistente = (users, email) => {
    for (let index = 0; index < users.length; index++) {
        if (users[index].email === email) {
            return true
        }
    }
    return false
}
let cpfexistente = (users, cpf) => {
    for (let index = 0; index < users.length; index++) {
        if (users[index].cpf === cpf) {
            return true
        }
    }
    return false
}
