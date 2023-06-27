// Vetor
let dados = []

// Cadastrar Dados
// dados.push({ nome: 'Afonso', email: 'afonso.silva.as73@gmail.com', idade: 24 })
// dados.push({ nome: 'Ana', email: 'ana.santos@gmail.com', idade: 21 })
// dados.push({ nome: 'Bruna', email: 'bruna@gmail.com', idade: 23 })


// Variavel para armazenar a posição do vetor
let posicaoVetor


// Metodo de listagem

let listar = () => {


    // Obter tabela
    let tabela = document.getElementById('tabela')

    // Remover linhas e colunas
    tabela.innerHTML = ''

    // Laço de repetição
    for (let index = 0; index < dados.length; index++) {
        // Criar linha 
        let linha = tabela.insertRow(-1)

        // Criar colunas
        let colunaId = linha.insertCell(0)
        let colunaNome = linha.insertCell(1)
        let colunaEmail = linha.insertCell(2)
        let colunaIdade = linha.insertCell(3)
        let colunaButton = linha.insertCell(4)

        // Conteudos das colunas
        colunaId.innerText = index + 1
        colunaNome.innerText = dados[index].nome
        colunaEmail.innerText = dados[index].email
        colunaIdade.innerText = dados[index].idade
        colunaButton.innerHTML = `<button class='btn btn-success' onclick="selecionar(${index})">Select</button>`
    }
}

let cadastrar = () => {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let idade = document.getElementById('idade')

    // Validação
    if (nome.value == '') {
        alert('O campo nome precisa ser prenchido!')
        nome.focus()
    } else if (nome.value.length < 3) {
        alert('Digite um nome válido')
        nome.focus()
    } else if(email.value == ''){
        alert('O campo e-mail precisa ser digitado!')
        email.focus()
    } else if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        alert('Digite um e-mail válido')
        email.focus()
    } else if(idade.value == ''){
        alert('O campo idade precisa ser prenchido!')
    } else if(isNaN(idade.value) == true){
        // isNaN
        alert('O campo idade deve conter apenas numeros!')
    } else {
        // Cadastrar no vetor
        dados.push({
            'nome': nome.value,
            'email': email.value,
            'idade': idade.value,
        })

        // Atualizar tabela
        listar()

        // Limpar iputs
        nome.value = ''
        email.value = ''
        idade.value = ''

        // foco do cursor
        nome.focus()
    }
}

let btnCadastrar = document.getElementById('btnCadastrar').addEventListener('click', cadastrar)

// Metodo para selecionar 

let selecionar = (index) => {
    // Dispor o valor do index na variavel pocicaoVetor
    posicaoVetor = index

    // Exibir os dados pessoai no formulario
    document.getElementById('nome').value = dados[index].nome
    document.getElementById('email').value = dados[index].email
    document.getElementById('idade').value = dados[index].idade
    
   
    document.getElementById('btnCadastrar').style.display = 'none'
    document.getElementById('btnAlterar').style.display = 'block'
    document.getElementById('btnRemover').style.display = 'block'
    document.getElementById('btnCancelar').style.display = 'block'
}

// Metodo para cancelar
let cancelar = () =>{
    // Limpar campos
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('idade').value = ''

    // Visibiladade dos botoes
    document.getElementById('btnCadastrar').style.display = 'block'
    document.getElementById('btnAlterar').style.display = 'none'
    document.getElementById('btnRemover').style.display = 'none'
    document.getElementById('btnCancelar').style.display = 'none'
}

let btnCancelar = document.getElementById('btnCancelar').addEventListener('click', cancelar)

// Metodo para excluir

let excluir = () =>{
    dados.splice(posicaoVetor, 1)

    // Atualizar tabela
    listar()

    // Linpar os campos e trabalhar com a visibilidade dos botoes
    cancelar()
}

let btnRemover = document.getElementById('btnRemover').addEventListener('click', excluir)


// Metodo para alterar

let alterar = () => {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let idade = document.getElementById('idade')

    // Validação
    if (nome.value == '') {
        alert('O campo nome precisa ser prenchido!')
        nome.focus()
    } else if (nome.value.length < 3) {
        alert('Digite um nome válido')
        nome.focus()
    } else if(email.value == ''){
        alert('O campo e-mail precisa ser digitado!')
        email.focus()
    } else if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        alert('Digite um e-mail válido')
        email.focus()
    } else if(idade.value == ''){
        alert('O campo idade precisa ser prenchido!')
    } else if(isNaN(idade.value) == true){
        // isNaN
        alert('O campo idade deve conter apenas numeros!')
    } else {
        // Alterar dados do vetor
        let pessoa = {
            'nome': nome.value,
            'email': email.value,
            'idade': idade.value
        }
        dados[posicaoVetor] = pessoa

        cancelar()

        // Atualizar tabela
        listar()

        // Limpar iputs
        nome.value = ''
        email.value = ''
        idade.value = ''

        // foco do cursor
        nome.focus()
    }
}

let btnAlterar = document.getElementById('btnAlterar').addEventListener('click', alterar)
