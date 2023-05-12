const mode = document.querySelector('.mudar-tema')

mode.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Mudei')
    const main = document.querySelector('#mode')
    if (mode.src.match('moon')) {
        mode.src = '../img/sun.png'
        main.classList.add('dark')
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
    const carneArea = seleciona('.carne-bovina-area')
    if (carneArea.style.display = 'none') {
        seleciona('.carne-bovina-area').style.display = 'grid'
        seleciona('.frango-area').style.display = 'none'
        seleciona('.acompanhamentos-area').style.display = 'none'
        seleciona('.bebidas-frias-area').style.display = 'none'
    }
})

const frango = seleciona('.item-frango')

frango.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Cliquei na area frango')
    const frangoArea = seleciona('.frango-area')
    if (frangoArea.style.display = 'none') {
        seleciona('.frango-area').style.display = 'grid'
        seleciona('.carne-bovina-area').style.display = 'none'
        seleciona('.acompanhamentos-area').style.display = 'none'
        seleciona('.bebidas-frias-area').style.display = 'none'
    }
})

const acompanhamentos = seleciona('.item-acompanhamentos')

acompanhamentos.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Cliquei na area acompanhamentos')
    const acompanhamentosArea = seleciona('.acompanhamentos-area')
    if (acompanhamentosArea.style.display = 'none') {
        seleciona('.acompanhamentos-area').style.display = 'grid'
        seleciona('.frango-area').style.display = 'none'
        seleciona('.carne-bovina-area').style.display = 'none'
        seleciona('.bebidas-frias-area').style.display = 'none'
    }
})

const bebidasFrias = seleciona('.item-bebidas-frias')

bebidasFrias.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Cliquei na area bebidas frias')
    const bebidasFriasArea = seleciona('.bebidas-frias-area')
    if (bebidasFriasArea.style.display = 'none') {
        seleciona('.acompanhamentos-area').style.display = 'none'
        seleciona('.frango-area').style.display = 'none'
        seleciona('.carne-bovina-area').style.display = 'none'
        seleciona('.bebidas-frias-area').style.display = 'grid'
    }
})

//  Mapear os produtos

produtosJson.map((item, index) => {
    let carneBovinaItem = seleciona('.models .burger-item').cloneNode(true) //clona os elementos
    let frangoItem = seleciona('.models .burger-item').cloneNode(true) //clona os elementos

    if (item.type == "carne") {
        // agora que clonamos precisamos colocar na main
        seleciona('.carne-bovina-area').append(carneBovinaItem)
    }
})
