// Função para carregar componentes HTML
async function carregarComponente(idContainer, arquivoHtml) {
    try {
        const response = await fetch(arquivoHtml);
        if (!response.ok) throw new Error(`Erro ao carregar ${arquivoHtml}`);

        const htmlText = await response.text();
        document.getElementById(idContainer).innerHTML = htmlText;
    } catch (error) {
        console.error('Erro na injeção do componente:', error);
    }
}

// Assim que a página abre, ele carrega o Header
carregarComponente('header-container', 'header.html');
carregarComponente('footer-container', 'footer.html');