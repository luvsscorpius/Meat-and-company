// Criar a varivel modalkey para ser global e cart tb
let modalkey = 0
let cart = []

// Variaveis para controlar a quantidade inicial de produtos
let qtProdutos = 1
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
    itemElement.setAttribute('data-key', index)
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

// Função para mudar a quantidade

const mudarQuantidade = () => {
    // ações nos botões + - da janela modal
    seleciona('.burgersInfo--qtmais').addEventListener('click', () => {
        qtProdutos++
        seleciona('.burgersInfo--qt').innerHTML = qtProdutos
    })

    seleciona('.burgersInfo--qtmenos').addEventListener('click', () => {
        if (qtProdutos > 1) {
            qtProdutos--
            seleciona('.burgersInfo--qt').innerHTML = qtProdutos
        }
    })
}

// função para saber o id do produto que esta clicando
const pegarkey = (e) => {
    let key = e.target.closest('.burger-item').getAttribute('data-key')
    console.log('Produto clicado', + key)
    console.log(produtosJson[key])

    // garantir que a quantidade inicial de produtos é 1 
    qtProdutos = 1

    // para manter a informação de qual produto foi clicado
    modalkey = key

    return key
}

// Função para adicionar no carrinho 
const adicionarNoCarrinho = () => {
    seleciona('.burgersInfo--addButton').addEventListener('click', () => {
        console.log('Produto adicionado ao carrinho')

        // precisamos pegar os dados do produto da janela modal atual
        // qual produto?? utilize a modalkey

        if (modalkey == null) { alert('modal nula') }

        // preco
        let price = seleciona('.burgersInfo--actualPrice').innerHTML.replace('R$&nbsp;', '')
        console.log(price)

        // quantidade 
        console.log('Quantidade de produtos: ' + qtProdutos)

        // agora precisamos criar um identificador agora que junte i
        let identificador = produtosJson[modalkey].id

        // antes de adicionar precisamos verificar se ja tem aquele código
        let key = cart.findIndex((item) => item.identificador == identificador)
        console.log(key)

        if (key > -1) {
            // se encontrar aumente
            cart[key].qt += qtProdutos
        } else {
            // adicionar produto no carrinho
            let produto = {
                id: produtosJson[modalkey].id,
                qt: qtProdutos,
                price: parseFloat(price)
            }
            cart.push(produto)
            console.log(produto)
            console.log('Sub total r$ ' + (produto.qt + produto.price).toFixed(2))
        }
        fecharModal()
        abrirCarrinho()
    })
}

// Função para abrir o carrinho
const abrirCarrinho = () => {
    console.log('Quantidade de itens no carrinho ' + cart.length)
    if (cart.length > 0) {
        // mostrar carrinho 
        seleciona('aside').classList.add('show')
        seleciona('header').style.display = 'flex'
    }

    // exibir o carrinho no modo mobile 
    seleciona('.menu-openner').addEventListener('click', () => {
        if (cart.length > 0) {
            seleciona('aside').classList.add('show')
            seleciona('aside').style.left = '0'
        }
    })
}

const abrirModalCarrinhoVazio = () => {
    seleciona('.menu-openner').addEventListener('click', () => {
        if (cart.length < 1) {
            seleciona('.carrinho-vazio').style.opacity = 0
            seleciona('.carrinho-vazio').style.display = 'flex'
            setTimeout(() => { seleciona('.carrinho-vazio').style.opacity = 1 }, 150)
        } else {
            seleciona('aside').classList.add('show')
            seleciona('aside').style.left = '0'
        }
    })
}

const fecharModalCarrinhoVazio = () => {
    seleciona('.carrinho-vazio').style.opacity = 0
    setTimeout(() => {
        seleciona('.carrinho-vazio').style.display = 'none'
    }, 500)
}


const botoesFecharModalCarrinhoVazio = () => {
    seleciona('.voltar').addEventListener('click', fecharModalCarrinhoVazio)
}

botoesFecharModalCarrinhoVazio()
abrirModalCarrinhoVazio()


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

            // deixar a quantidade padrão = 1
            seleciona('.burgersInfo--qt').innerHTML = qtCarne

            // função para pegar a chave de cada produto que você clicar
            let chave = pegarkey(e)
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
            seleciona('.burgersInfo--qt').innerHTML = qtFrango
            let chave = pegarkey(e)
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
            seleciona('.burgersInfo--qt').innerHTML = qtAcompanhamentos
            let chave = pegarkey(e)
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
            seleciona('.burgersInfo--qt').innerHTML = qtBebidasFrias
            let chave = pegarkey(e)
        })
    }
})

mudarQuantidade()
adicionarNoCarrinho()

