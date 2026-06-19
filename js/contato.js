const sugestionbox = document.getElementById('SugestionBox');
const sugestionsuccess = document.getElementById('SuccessBox');

function EnviarSugestao() {
    sugestionbox.style.display = "none";
    sugestionsuccess.classList.remove('success-box-hidden');
    console.log('sucesso\n',sugestionsuccess);
}
