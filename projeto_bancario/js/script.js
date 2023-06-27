users = JSON.parse(localStorage.getItem('usuarios'))
const create = () => {
    loader.style.display = 'flex'
    setInterval(() => {
        window.location.assign('/projeto_bancario/acount/acount.html')
    }, 1000);
}

const comfirm = () => {
    aviso.style.display = 'none'
}

const emailNumber = () => {
    email.addEventListener('input', function () {
        const value = email.value;
        if (!isNaN(value)) {
            email.value = value.slice(0, 11);
        }
    });
};
emailNumber();

const login = () => {
    emailFound = false
    senhaFound = false
    cpfFound = false

    for (let index = 0; index < users.length; index++) {
        if (email.value === users[index].email && senha.value === users[index].senha) {
            emailFound = true;
            senhaFound = true
            console.log(users[index].email);
            localStorage.setItem('usuarioLogado', JSON.stringify(users[index]))
            loader.style.display = 'flex'
            setInterval(() => {
                window.location.assign('/projeto_bancario/inicio/home.html')
            }, 1000);
            return;
        }
        else if (email.value === users[index].cpf && senha.value === users[index].senha) {
            cpfFound = true;
            senhaFound = true
            console.log(users[index].cpf);
            localStorage.setItem('usuarioLogado', JSON.stringify(users[index]))
            loader.style.display = 'flex'
            setInterval(() => {
                window.location.assign('/projeto_bancario/inicio/home.html')
            }, 1000);
            return;
        }

    }
    if (!emailFound && !senhaFound && !cpfFound) {
        aviso.style.display = 'flex';
        textaviso.innerHTML = 'Nenhuma conta encontrada.';
        return false;
    }
}
