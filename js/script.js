const mode = document.querySelector('.mudar-tema')

mode.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Mudei')
    const main = document.querySelector('#mode')
    if (mode.src.match('moon')) {
        mode.src = '../img/sun.png'
        main.classList.add('dark')
        burgerItem.classList.add('dark')
    } else {
        mode.src = '../img/moon.png'
        main.classList.remove('dark')
    }
})

// Funcoes auxiliares 
const seleciona = (elemento) => document.querySelector(elemento)

const carneBovina = document.querySelector('.item-carne')

carneBovina.addEventListener('click', (event) => {
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

const frango = seleciona('.item-frango')

frango.addEventListener('click', (event) => {
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

const acompanhamentos = seleciona('.item-acompanhamentos')

acompanhamentos.addEventListener('click', (event) => {
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

const bebidasFrias = seleciona('.item-bebidas-frias')

bebidasFrias.addEventListener('click', (event) => {
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

// Função para preencher os dados dos produtos na main
const preencherDadosDoItem = (itemElement, item, index) => {
    itemElement.querySelector('.burger-item--id').value = index
    itemElement.querySelector('.burger-item--img img').src = item.img
    itemElement.querySelector('.burger-item--name').innerHTML = item.name
    itemElement.querySelector('.burger-item--price').innerHTML = item.price
}

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
    }

    if (item.type == "frango") {
        seleciona('#frango-area').append(frangoItem)
        preencherDadosDoItem(frangoItem, item, index)
    }

    if (item.type == "acompanhamentos") {
        seleciona('#acompanhamentos-area').append(acompanhamentosItem)
        preencherDadosDoItem(acompanhamentosItem, item, index)
    }

    if (item.type == "bebidas-frias") {
        seleciona('#bebidas-frias-area').append(bebidasFriasItem)
        preencherDadosDoItem(bebidasFriasItem, item, index)
    }
})
