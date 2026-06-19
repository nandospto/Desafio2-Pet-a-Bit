// --- CONFIGURAÇÕES DA API ---
const API_URL = 'https://blog-api.seedabit.org.br/api/posts';
const API_KEY = 'key-32xxva5agp';

// --- 1. GET: BUSCAR OS POSTS ---
async function getPosts() {
    try {
        // O "fetch" é o nosso garçom indo na cozinha buscar os dados
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY,
                'accept': '*/*'
            }
        });

        if (!response.ok) throw new Error('Erro na comunicação com a API');

        // Transforma a resposta em um formato que o JS entende (JSON)
        const posts = await response.json();

        // Manda os posts para a função que vai desenhar eles na tela
        displayPosts(posts);
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        document.getElementById('blog-posts').innerHTML = '<p>Erro ao carregar os posts. Tente novamente mais tarde.</p>';
    }
}

// --- 2. DESENHAR OS CARDS NA TELA ---
function displayPosts(posts) {
    const container = document.getElementById('blog-posts');

    // Se a API não retornar nenhum post, mostramos uma mensagem amigável
    if (posts.length === 0) {
        container.innerHTML = '<p>Nenhum post encontrado. Seja o primeiro a compartilhar sua experiência!</p>';
        return;
    }

    // O .map() vai varrer a lista de posts e criar o HTML do card para cada um
    container.innerHTML = posts.map(post => `
        <div class="post-card">
            <h3>${post.title}</h3>
            <p class="conteudo">${post.content}</p>
            <div class="post-rodape">
                <div class="post-autor">
                    <img src="/img/usuario.png" alt="Usuário"> <span>${post.author}</span>
                </div>
                <button class="btn-deletar" onclick="deletePost('${post.id}')"><img src="/img/deletar.png" alt="Deletar"></button>
            </div>
        </div>
    `).join('');
}

// --- 3. POST: CRIAR UM NOVO POST ---
// Ouvimos o evento de "submit" (enviar) do formulário
document.getElementById('post-form').addEventListener('submit', async (event) => {
    // Impede a página de recarregar ao clicar no botão
    event.preventDefault();

    // Captura o que o usuário digitou
    const dadosDoFormulario = {
        title: document.getElementById('title').value.trim(),
        content: document.getElementById('content').value.trim(),
        author: document.getElementById('author').value.trim()
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
                'accept': '*/*'
            },
            body: JSON.stringify(dadosDoFormulario) // Empacota os dados para enviar
        });

        if (!response.ok) throw new Error('Erro ao criar post na API');

        alert('Post publicado com sucesso!');

        // Limpa os campos do formulário para o próximo uso
        document.getElementById('post-form').reset();

        // Chama a função GET novamente para atualizar a lista na tela na mesma hora
        getPosts();
    } catch (error) {
        console.error('Erro:', error);
        alert('Falha ao publicar o post. Verifique os dados e tente novamente.');
    }
});

// --- 4. DELETE: APAGAR UM POST ---
async function deletePost(postId) {
    // Uma janelinha de confirmação simples para evitar cliques acidentais
    if (!confirm('Tem certeza que deseja deletar este post?')) return;

    try {
        // Notem que a URL muda, nós enviamos o ID no final do link
        const response = await fetch(`${API_URL}/${postId}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': API_KEY,
                'accept': '*/*'
            }
        });

        if (!response.ok) throw new Error('Erro ao deletar post na API');

        alert('Post deletado com sucesso!');

        // Atualiza a lista na tela para o card sumir
        getPosts();
    } catch (error) {
        console.error('Erro:', error);
        alert('Falha ao deletar o post.');
    }
}

// --- INICIALIZAÇÃO ---
// Assim que o arquivo carrega, nós chamamos a função para buscar os posts e preencher a tela
getPosts();