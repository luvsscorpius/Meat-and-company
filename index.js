
const btn = document.querySelector('.cadastrar')
const nome = document.querySelector('.name')
const email = document.querySelector('.email')
const celular = document.querySelector('.celular')

const nomeVazio = document.querySelector('.dadosVazio')
const cadastro = document.querySelector('.cadastrado')

const cadastrar = () => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Cadastrei')
        if (nome.value < 1) {
            console.log("Nome vazio")
            abrirDadosVazio()
        } else {
            abrirModalCadastrado()
        }
        if (email.value < 1) {
            console.log('Email vazio')
            abrirDadosVazio()
        } else {
            abrirModalCadastrado()
        }
        if (celular.value < 1) {
            console.log('Celular vazio')
            abrirDadosVazio()
        } else {
            abrirModalCadastrado()
        }

    })
}

const abrirModalCadastrado = () => {
    cadastro.style.opacity = 0
    cadastro.style.display = 'flex'
    setTimeout(() => { cadastro.style.opacity = 1 }, 150)
}

const fecharModalCadastrado = () => {
    cadastro.style.opacity = 0
    setTimeout(() => {
        cadastro.style.display = 'none'
    }, 500)
}

const botoesFecharModalCadastrado = () => {
    document.querySelector('.cadastradoOk').addEventListener('click', fecharModalCadastrado)
}

const abrirDadosVazio = () => {
    nomeVazio.style.opacity = 0
    nomeVazio.style.display = 'flex'
    setTimeout(() => { nomeVazio.style.opacity = 1 }, 150)
}

const fecharDadosVazio = () => {
    nomeVazio.style.opacity = 0
    setTimeout(() => {
        nomeVazio.style.display = 'none'
    }, 500)
}

const botoesFecharModalDadosVazio = () => {
    document.querySelector('.dadosVazioOk').addEventListener('click', fecharDadosVazio)
}

botoesFecharModalCadastrado()
botoesFecharModalDadosVazio()
cadastrar()