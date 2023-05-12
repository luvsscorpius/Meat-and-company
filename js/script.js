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