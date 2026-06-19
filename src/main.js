import { BlogAPI } from './blog.js'

async function loadPosts() {
    const posts = await BlogAPI.getPosts();
    const container = document.getElementById('blog-posts');
    const meusPosts = JSON.parse(localStorage.getItem('meusPosts') || '[]');

    container.innerHTML = posts.length
        ? posts.map(p => `
            <div class="post-card">
                <h3>${p.title}</h3>
                <p>${p.content}</p>
                <div class="card-footer">
                    <small>Por <strong>${p.author}</strong> em ${new Date(p.createdAt).toLocaleDateString('pt-BR')}</small>
                    ${meusPosts.includes(p.id) ? `<button class="btn-delete" data-id="${p.id}">Excluir</button>` : ''}
                </div>
            </div>
          `).join('')
        : '<p>Nenhum post encontrado.</p>';

    document.querySelectorAll('.btn-delete').forEach(btn =>
        btn.addEventListener('click', async () => {
            if (confirm('Excluir este post?')) {
                await BlogAPI.deletePost(btn.dataset.id);

                const meusPosts = JSON.parse(localStorage.getItem('meusPosts') || '[]');
                localStorage.setItem('meusPosts', JSON.stringify(meusPosts.filter(id => id !== btn.dataset.id)));

                loadPosts();
            }
        })
    );
}

document.getElementById('post-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        title: document.getElementById('title').value.trim(),
        content: document.getElementById('content').value.trim(),
        author: document.getElementById('author').value.trim()
    };

    if (!data.title || !data.content || !data.author) return alert('Preencha todos os campos!');

    const novoPost = await BlogAPI.createPost(data);

    const meusPosts = JSON.parse(localStorage.getItem('meusPosts') || '[]');
    meusPosts.push(novoPost.id);
    localStorage.setItem('meusPosts', JSON.stringify(meusPosts));

    e.target.reset();
    loadPosts();
});

loadPosts();