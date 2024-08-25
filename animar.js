const btnMenu = document.getElementById('menu-mobile')
const animarBtn = document.getElementById('btn-menu')

btnMenu.addEventListener('click',animarMenu)

function animarMenu(){
    btnMenu.classList.toggle('abrir')
    animarBtn.classList.toggle('ativo')
}