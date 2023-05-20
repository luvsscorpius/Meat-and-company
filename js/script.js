// Criar a varivel modalkey para ser global e cart tb
let modalkey = 0
let cart = []

// Variaveis para controlar a quantidade inicial de produtos
let qtCarne = 1
let qtFrango = 1
let qtAcompanhamentos = 1
let qtBebidasFrias = 1

// Funcoes auxiliares 
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

carneBovina = () => {
    const carneBovina = document.querySelector('.item-carne').addEventListener('click', (event) => {
        event.preventDefault()
        console.log('cliquei na area carne')
        const carneArea = seleciona('#carne-bovina-area')
        if (carneArea.style.display = 'none') {
            seleciona('#carne-bovina-area').style.display = 'grid'
            seleciona('#frango-area').style.display = 'none'
            seleciona('#acompanhamentos-area').style.display = 'none'
            seleciona('#bebidas-frias-area').style.display = 'none'
        }
    })
}


frango = () => {
    const frango = seleciona('.item-frango').addEventListener('click', (event) => {
        event.preventDefault()
        console.log('Cliquei na area frango')
        const frangoArea = seleciona('#frango-area')
        if (frangoArea.style.display = 'none') {
            seleciona('#frango-area').style.display = 'grid'
            seleciona('#carne-bovina-area').style.display = 'none'
            seleciona('#acompanhamentos-area').style.display = 'none'
            seleciona('#bebidas-frias-area').style.display = 'none'
        }
    })
}

acompanhamentos = () => {
    const acompanhamentos = seleciona('.item-acompanhamentos').addEventListener('click', (event) => {
        event.preventDefault()
        console.log('Cliquei na area acompanhamentos')
        const acompanhamentosArea = seleciona('#acompanhamentos-area')
        if (acompanhamentosArea.style.display = 'none') {
            seleciona('#acompanhamentos-area').style.display = 'grid'
            seleciona('#frango-area').style.display = 'none'
            seleciona('#carne-bovina-area').style.display = 'none'
            seleciona('#bebidas-frias-area').style.display = 'none'
        }
    })
}

bebidasFrias = () => {
    const bebidasFrias = seleciona('.item-bebidas-frias').addEventListener('click', (event) => {
        event.preventDefault()
        console.log('Cliquei na area bebidas frias')
        const bebidasFriasArea = seleciona('#bebidas-frias-area')
        if (bebidasFriasArea.style.display = 'none') {
            seleciona('#acompanhamentos-area').style.display = 'none'
            seleciona('#frango-area').style.display = 'none'
            seleciona('#carne-bovina-area').style.display = 'none'
            seleciona('#bebidas-frias-area').style.display = 'grid'
        }
    })
}

carneBovina()
frango()
acompanhamentos()
bebidasFrias()

// Função para preencher os dados dos produtos na main
const preencherDadosDoItem = (itemElement, item, index) => {
    itemElement.querySelector('.burger-item--id').value = index
    itemElement.querySelector('.burger-item--img img').src = item.img
    itemElement.querySelector('.burger-item--name').innerHTML = item.name
    itemElement.querySelector('.burger-item--price').innerHTML = item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

// Função para preencher dados na janela modal
const preencherDadosModal = (item) => {
    let id = seleciona('.burger-item--id').innerHTML = item.id - 1
    seleciona('.burgersBig img').src = item.img
    seleciona('.burgersInfo h1').innerHTML = item.name
    seleciona('.burgersInfo--kc').innerHTML = item.kc
    seleciona('.burgersInfo--desc').innerHTML = item.description
    seleciona('.burgersInfo--actualPrice').innerHTML = item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return id
}

// Abrir o modal

const abrirModal = () => {
    seleciona('.burgersWindowArea').style.opacity = 0
    seleciona('.burgersWindowArea').style.display = 'flex'
    setTimeout(() => { seleciona('.burgersWindowArea').style.opacity = 1 }, 150)
    // setTimeout foi usado para dar animação
}

// Função para fechar a janela modal

const fecharModal = () => {
    seleciona('.burgersWindowArea').style.opacity = 0
    setTimeout(() => {
        seleciona('.burgersWindowArea').style.display = 'none'
    }, 500)
}

const botoesFechar = () => {
    selecionaTodos('.burgersInfo--cancelMobileButton, .burgersInfo--cancelButton').forEach((item) => {
        item.addEventListener('click', fecharModal)
    })
}

const mode = document.querySelector('.mudar-tema')
const main = document.querySelector('#mode')
const boddy = document.querySelector('.burgersWindowBody')

mode.addEventListener('click', (e) => {
    e.preventDefault()
    main.classList.toggle('dark')
    boddy.classList.toggle('dark')
})

//  Mapear os produtos

produtosJson.map((item, index) => {
    let carneBovinaItem = seleciona('.models .burger-item').cloneNode(true) //clona os elementos
    let frangoItem = seleciona('.models .burger-item').cloneNode(true)
    let acompanhamentosItem = seleciona('.models .burger-item').cloneNode(true)
    let bebidasFriasItem = seleciona('.models .burger-item').cloneNode(true)

    if (item.type == "carne") {
        // agora que clonamos precisamos colocar na main
        seleciona('#carne-bovina-area').append(carneBovinaItem)

        // agora precisamos preencher os dados 
        preencherDadosDoItem(carneBovinaItem, item, index)

        carneBovinaItem.querySelector('.burger-item a').addEventListener('click', (e) => {
            e.preventDefault()
            console.log('Clicou em um Hamburguer de carne bovina')

            // função para abrir o modal 
            abrirModal()

            // função para fechar o modal
            botoesFechar()

            // função para preencher dados modal
            preencherDadosModal(item)
        })

    }

    if (item.type == "frango") {
        seleciona('#frango-area').append(frangoItem)
        preencherDadosDoItem(frangoItem, item, index)

        frangoItem.querySelector('.burger-item a').addEventListener('click', (e) => {
            e.preventDefault()
            console.log('Clicou em um Hamburguer de Frango')
            abrirModal()
            botoesFechar()
            preencherDadosModal(item)
        })
    }

    if (item.type == "acompanhamentos") {
        seleciona('#acompanhamentos-area').append(acompanhamentosItem)
        preencherDadosDoItem(acompanhamentosItem, item, index)

        acompanhamentosItem.querySelector('.burger-item a').addEventListener('click', (e) => {
            e.preventDefault()
            console.log('Clicou em um Acompanhamento')
            abrirModal()
            botoesFechar()
            preencherDadosModal(item)
        })
    }

    if (item.type == "bebidas-frias") {
        seleciona('#bebidas-frias-area').append(bebidasFriasItem)
        preencherDadosDoItem(bebidasFriasItem, item, index)
        bebidasFriasItem.querySelector('.burger-item a').addEventListener('click', (e) => {
            e.preventDefault()
            console.log('Clicou em uma Bebida fria')
            abrirModal()
            botoesFechar()
            preencherDadosModal(item)
        })
    }
})

