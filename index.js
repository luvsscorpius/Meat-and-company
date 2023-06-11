const btn = document.querySelector('.cadastrar')
const nome = document.querySelector('.name')
const email = document.querySelector('.email')
const celular = document.querySelector('.celular')

const nomeVazio = document.querySelector('.dadosVazio')
const cadastro = document.querySelector('.cadastrado')

const target = document.querySelectorAll('[data-anime]')
const animationClss = 'animate'

const mudarTema = document.querySelector('.mudar-tema')

const ul = document.querySelector('.header-home ul')
const menuBtn = document.querySelector('.hamburger')

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open')
    } else {
        ul.classList.add('open')
    }
}

mudarTema.addEventListener('click', (e) => {
    e.preventDefault()

    const github = document.querySelector('.github')
    const linkedin = document.querySelector('.linkedin')

    const contentItems = document.querySelector('.content-items')
    const miniMenu = document.querySelector('.mini-menu-items')
    const desconto = document.querySelector('.desconto')

    miniMenu.classList.toggle('dark')
    contentItems.classList.toggle('dark')
    desconto.classList.toggle('dark')

    if (mudarTema.src.match('moon')) {
        mudarTema.src = 'img/sun.png'
        github.src = 'img/github-mark-white.png'
        linkedin.src = 'img/linkedin-white-icon.png'
    } else {
        mudarTema.src = 'img/moon.png'
        github.src = 'img/github-mark.png'
        linkedin.src = 'img/linkedin-icon.png'
    }
})

function animeScroll() {
    //precisamos saber o tamanho do scroll ate o topo do site
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)

    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            // se for maior eu quero que ele adicione uma class
            element.classList.add(animationClss)
        } else {
            element.classList.remove(animationClss)
        }
        console.log(element.offsetTop)
    })
}

animeScroll()

if (target.length) {
    window.addEventListener('scroll', function () {
        animeScroll()
    })
}

const cadastrar = () => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Cadastrei')
        if (nome.value < 1) {
            console.log("Nome vazio")
            abrirDadosVazio()
        }
        if (email.value < 1) {
            abrirDadosVazio()
        }
        if (celular.value < 1) {
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