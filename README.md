# Desafio2-Pet-a-Bit
Repositório do Desafio 2 do processo seletívo da Seed-a-Bit para o grupo 3 (Pet-a-Bit)

# Instrução Desafio 2

# **Desafio 2: Desenvolvimento da Landing Page + Integração com Blog (HTTP) + Apresentação Final**

**Período:** 16/06 → 19/06

---

## **🎯 OBJETIVO**

Transformar a solução idealizada no Desafio 1 em uma **página institucional funcional**, aplicando HTML, CSS e JavaScript, incluindo integração com um back-end comum via requisições HTTP (GET, POST e DELETE).

O trainee deve demonstrar domínio básico de front-end, comunicação técnica e capacidade de consumir uma API real. 

---

## **🧩 ETAPAS DO DESAFIO**

## **1️⃣ Desenvolvimento da Página Institucional**

O grupo deverá desenvolver o código de no mínimo 4 telas prototipadas no desafio 1

**Telas obrigatórias:**

- Tela inicial
- Tela explicando a solução
- Blog

**Requisitos:**

- ✓ Landing page responsiva
- ✓ Código organizado e claro
- ✓ Deploy no GitHub Pages

---

## **2️⃣ Integração com o Blog (JavaScript + HTTP)**

📌 **ADENDO: COMPONENTE DO BLOG**

Para viabilizar a integração com a API, a tela do blog deverá seguir uma estrutura de dados unificada.

O grupo deve utilizar o **design padrão fornecido** como referência estrutural  para o desenvolvimento (HTML/CSS) dos cards de postagem e do formulário de envio. O layout deve ser reproduzido diretamente no código e incorporado à interface atual do site.

**Elementos obrigatórios no layout do card:**

- Nome
- Título
- Conteúdo
- Botão ou ícone de exclusão (preparação para a rota DELETE da API)

**Elementos obrigatórios no layout do Formulário de Envio:**

- Campos de entrada para: Nome, Título e Conteúdo
- Botão de envio (preparação para a rota POST da API)

**Referência do Design Padrão:**

Link do design

💡 Flexibilidade de Design:

O foco principal deste adendo é a **estrutura de dados**. Se o site do seu grupo já possui uma seção de blog, vocês podem manter o layout que criaram, **desde que adicionem todos os elementos obrigatórios listados acima**. Vocês têm total liberdade para adaptar o estilo visual (cores, fontes, bordas) para que combine com a identidade do projeto de vocês.

Por outro lado, se preferirem focar apenas na programação agora, **não há nenhum problema em seguir à risca o visual do design padrão fornecido**. A escolha de adaptar ou copiar exatamente como está é 100% da equipe

OBS: Não precisa alterar o protótipo no figma apenas seguir o padrão quando for implementar no código o objetivo principal é a integração com a API

### **O TRAINEE DEVERÁ IMPLEMENTAR:**

### **📥 GET /posts**

- Listar posts no site
- Exibir título, conteúdo e autor

### **🗑️ DELETE /api/posts/{id}**

- Deletar um post específico
- Passar o ID do post na URL

### **📤 POST /posts**

- Formulário simples com:
    - título
    - conteúdo
    - autor
- Ao enviar, o site cria um novo post via `fetch`
- O blog atualiza automaticamente após a criação

---

## **3️⃣ README**

**Deve conter:**

- ✓ Explicar como o blog foi integrado
- ✓ Mostrar os endpoints usados
- ✓ Link para o site
- ✓ Link para o protótipo

---

## **4️⃣ Apresentação Final em Grupo**

**Pitch apresentando:**

- Problema e Solução (Concepção de Solução Digital)
- Protótipo (Figma)
- Site final (Github Pages)
- Funcionamento da área do blog
- Todos devem apresentar

🎬 **Demonstração ao vivo do GET e POST funcionando**

**Toda a apresentação deverá ser feita em 12 minutos**

---

## **📦 ENTREGÁVEIS**

- ☑️ Site institucional funcional publicado
- ☑️ Integração com API usando fetch (GET, POST e DELETE)
- ☑️ README completo
- ☑️ Pitch final em grupo

### **📤 O que deve ser enviado no e-mail**

No e-mail, inclua **somente**:

1. **Link da página do Notion com backlog de tarefas +** Link do site no github Pages + Link do repositório

## **📤 Como enviar**

O desafio deve ser enviado para **processo.seletivo@seedabit.org.br** com o assunto:

**“[PSEL 26.2] 2º Desafio Projetos - Nome do Grupo”**

Prazo final: **até 18:59h do dia 19/06/2026**.

---

## **🔗 INFORMAÇÕES IMPORTANTES SOBRE INTEGRAÇÃO**

**API Base URL:**

```
https://blog-api.seedabit.org.br
```

**Endpoints:**

```
GET    /api/posts
POST   /api/posts
DELETE /api/posts/{id}
```

**API Keys**

```
Grupo 1 (Hedu): key-bzgq2jv7zs
Grupo 2 (Os Casas): key-r11qdtwbh8
Grupo 3 (Pet a Bit): key-32xxva5agp
Grupo 4 (Os Patinhas): key-qxrrmif75j
```

---

## **💻 EXEMPLOS DE USO DA API KEY**

### **Exemplo 1: GET /api/posts (Listar Posts)**

```jsx
// URL da API
const API_URL = 'https://blog-api.seedabit.org.br/api/posts';

// Sua chave de API (fornecida pelo admin)
const API_KEY = 'group-x-80bvir3e';

// Função para buscar posts
async function getPosts() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY,
                'accept': '*/*'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const posts = await response.json();
        console.log('Posts recebidos:', posts);

				// Exibir os posts na página
				displayPosts(posts);

        return posts;
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        alert('Erro ao carregar posts. Tente novamente.');
    }
}

// Função para exibir os posts
function displayPosts(posts) {
    const blogContainer = document.getElementById('blog-posts');
    blogContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p class="author">Por: ${post.author}</p>
            <p class="content">${post.content}</p>
            <p class="date">${new Date(post.createdAt).toLocaleDateString('pt-BR')}</p>
        `;
        blogContainer.appendChild(postElement);
    });
}

// Chamar a função quando a página carregar
getPosts();

```

---

### **Exemplo 2: POST /api/posts (Criar Novo Post)**

```jsx
// URL da API
const API_URL = 'https://blog-api.seedabit.org.br/api/posts';

// Sua chave de API (fornecida pelo admin)
const API_KEY = 'group-x-80bvir3e';

// Função para criar um novo post
async function createPost(title, content, author) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
                'accept': '*/*'
            },
            body: JSON.stringify({
                title: title,
                content: content,
                author: author
            })
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const newPost = await response.json();
        console.log('Post criado com sucesso:', newPost);

				// Atualizar a lista de posts
				getPosts();

        return newPost;
    } catch (error) {
        console.error('Erro ao criar post:', error);
        alert('Erro ao criar post. Verifique os dados e tente novamente.');
    }
}

// Exemplo de uso com formulário
const form = document.getElementById('post-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

		// Validação básica
		if (!title || !content || !author) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

// Criar o post
await createPost(title, content, author);
		// Limpar formulário
    form.reset();
});

```

---

### **Exemplo 4: DELETE /api/posts/{id} (Deletar Post)**

```jsx
// URL da API
const API_URL = 'https://blog-api.seedabit.org.br/api/posts';

// Sua chave de API (fornecida pelo admin)
const API_KEY = 'group-x-80bvir3e';

// Função para deletar um post
async function deletePost(postId) {

    try {
        const response = await fetch(`${API_URL}/${postId}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': API_KEY,
                'accept': '*/*'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        console.log('Post deletado com sucesso!');
        alert('Post deletado com sucesso!');

			// Atualizar a lista de posts
			getPosts();

    } catch (error) {
        console.error('Erro ao deletar post:', error);
        alert('Erro ao deletar post. Tente novamente.');
    }
}

// Modificar a função displayPosts para incluir botão de deletar
function displayPosts(posts) {
    const container = document.getElementById('blog-posts');

    if (posts.length === 0) {
        container.innerHTML = '<p>Nenhum post encontrado.</p>';
            <p class="meta">Por ${post.author} em ${new Date(post.createdAt).toLocaleDateString()}</p>
            <p>${post.content}</p><button class="btn-delete" onclick="deletePost(${post.id})">🗑️ Deletar</button>
        </article>
    `).join('');
}

```

---

### **Exemplo 3: Implementação Completa (HTML + JS)**

**HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Blog - CapacitaBR</title>
</head>
<body>
<!-- Formulário para criar post -->
		<section id="criar-post">
        <h2>Criar Novo Post</h2>
        <form id="post-form">
            <input type="text" id="title" placeholder="Título" required>
            <textarea id="content" placeholder="Conteúdo" required></textarea>
            <input type="text" id="author" placeholder="Autor" required>
            <button type="submit">Publicar</button>
        </form>
    </section>

<!-- Lista de posts -->
		<section id="blog">
        <h2>Posts Recentes</h2>
        <div id="blog-posts"></div>
    </section>

    <script src="blog.js"></script>
</body>
</html>

```

**JavaScript (blog.js):**

```jsx
// Configuração da API
const API_URL = 'https://blog-api.seedabit.org.br/api/posts';
const API_KEY = 'group-x-80bvir3e'; // SUBSTITUA pela sua chave

// GET - Buscar posts
async function getPosts() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY
            }
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('blog-posts').innerHTML =
            '<p class="error">Erro ao carregar posts.</p>';
    }
}

// POST - Criar post
async function createPost(data) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const newPost = await response.json();
        alert('Post criado com sucesso!');
        
        getPosts();
        
        // Atualiza a lista
        return newPost;
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao criar post. Tente novamente.');
    }
}

// Exibir posts na página
function displayPosts(posts) {
    const container = document.getElementById('blog-posts');

    if (posts.length === 0) {
        container.innerHTML = '<p>Nenhum post encontrado.</p>';
        return;
    }

    container.innerHTML = posts.map(post => `
        <article class="post">
            <h3>${post.title}</h3>
            <p class="meta">Por ${post.author} em ${new Date(post.createdAt).toLocaleDateString()}</p>
            <p>${post.content}</p>
        </article>
    `).join('');
}

// Event listener do formulário
document.getElementById('post-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        title: document.getElementById('title').value.trim(),
        content: document.getElementById('content').value.trim(),
        author: document.getElementById('author').value.trim()
    };

    if (formData.title && formData.content && formData.author) {
        await createPost(formData);
        e.target.reset();
    } else {
        alert('Preencha todos os campos!');
    }
});

// Carregar posts ao abrir a página
getPosts();
```

---

---

### **⚠️ IMPORTANTE:**

1. **Substitua `group-1-80bvir3e` pela sua API key real (Fornecida no inicio dessa aba)**
2. **[opcional] Nunca exponha sua API key no código público** (use variáveis de ambiente em produção)
3. **A API key deve ser enviada no header `x-api-key`** (não `Authorization`)
4. **Sempre trate erros** para uma melhor experiência do usuário
5. **Valide os dados antes de enviar** para a API

---

---

## Material de apoio

- Como publicar site no github pages
- https://blog-api.seedabit.org.br/api/docs# (Documentação API)
- https://github.com/iuricode/padroes-de-commits
