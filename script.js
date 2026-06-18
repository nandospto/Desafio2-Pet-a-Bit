// Captura o botão e a lista do menu
const btnMenu = document.getElementById('btn-menu');
const navMenu = document.querySelector('#nav-menu ul');

// Ouve o clique no botão
btnMenu.addEventListener('click', () => {
    // A função toggle liga e desliga a classe 'ativo' no menu
    navMenu.classList.toggle('ativo');
});