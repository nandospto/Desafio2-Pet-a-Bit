// Captura o botão e a lista do menu
const btnMenu = document.getElementById('btn-menu');
const navMenu = document.querySelector('#nav-menu ul');

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('ativo');
});