const sugestionbox = document.getElementById('SugestionBox');
const sugestionsuccess = document.getElementById('SuccessBox');

// sugestionsuccess.style.display = 'none';
console.log(sugestionbox,sugestionsuccess)


function EnviarSugestao() {
    sugestionbox.style.display = "none";
    sugestionsuccess.classList.remove('success-box-hidden');
    console.log('sucesso\n',sugestionsuccess);
}
