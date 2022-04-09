const more_yellow = document.querySelector('.more_yellow')
const more_red = document.querySelector('.more_red')
const yellow = document.querySelector('.yellow')
const red = document.querySelector('.red')

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

more_yellow.addEventListener('mouseover', () =>
    yellow.style.backgroundColor = "#FED200"
)

more_yellow.addEventListener('mouseout', () =>
    yellow.style.backgroundColor = "#FEF1B5"
)

more_red.addEventListener('mouseover', () =>
    red.style.backgroundColor = "#FE7A6B"
)

more_red.addEventListener('mouseout', () =>
    red.style.backgroundColor = "#FFD9D3"
)

burger.addEventListener('click', () => menu.classList.toggle('hidden'))