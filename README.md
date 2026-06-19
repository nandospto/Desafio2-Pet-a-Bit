# 🐾 Pet-a-Bit

> Plataforma Web + Mobile desenvolvida para conectar tutores de pets a babás e cuidadores de confiança.

A **Pet-a-Bit** nasceu com o propósito de ajudar pessoas que passam grande parte do dia fora de casa ou não possuem uma rede de apoio para cuidar de seus animais de estimação. A proposta da plataforma é proporcionar segurança, praticidade e tranquilidade aos tutores, garantindo que seus pets recebam atenção, companhia e os devidos cuidados mesmo quando seus donos estão ausentes.

---

## 🔗 Links do Projeto

* 🌐 **Site / Deploy:** [link do github pages](https://nandospto.github.io/Desafio2-Pet-a-Bit/)
* 🎨 **Prototipação (Figma):** [link da prototipação no figma](https://www.figma.com/design/6ycym3cqd5E1EgbbV1FtoE/Prototipação---Concepção--Copy-?node-id=0-1&p=f&t=kyuCUYHF2h6C0QB4-0)
* 🎨 **Concepção (Figma):** [link da concepção no figma](https://www.figma.com/board/U7MF8n9Qdh6nujc2wr3B1D/Concepção--Copy-?node-id=0-1&p=f&t=kglA8DHSCrjm208E-0)
---

## 📌 Sumário

1. [Problema](#-o-problema)
2. [Solução](#-a-solução)
3. [Objetivo](#-objetivo)
4. [Público-Alvo](#-público-alvo)
5. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
6. [Integração com o Blog](#-integração-com-o-blog)
7. [Endpoints da API Utilizados](#-endpoints-da-api-utilizados)

---

## ❓ O Problema

Muitos donos de pets enfrentam sérias dificuldades para conciliar a rotina corrida de trabalho e compromissos pessoais com os cuidados e a atenção que seus animais necessitam. Além disso, a falta de uma rede de apoio próxima (como familiares ou amigos disponíveis) e a complexidade de encontrar profissionais de confiança geram preocupação, insegurança e estresse nos tutores.

## 💡 A Solução

A **Pet-a-Bit** conecta tutores de pets a babás e cuidadores verificados de forma rápida, simples e segura.

## 🎯 Objetivo

Transformar a maneira como os tutores gerenciam a vida de seus animais de estimação. Oferecemos uma experiência prática, segura e acessível que garante a felicidade e integridade física dos pets, trazendo tranquilidade aos seus donos.

---

## 👥 Público-Alvo

* Pessoas com rotinas corridas ou que trabalham muitas horas fora de casa.
* Profissionais que precisam viajar com frequência e não têm onde deixar seus pets.
* Tutores que não possuem familiares ou amigos disponíveis para prestar suporte de confiança nos cuidados diários de seus animais.

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica das páginas da plataforma.
* **CSS3:** Estilização moderna e layout totalmente responsivo para diferentes tamanhos de tela.
* **JavaScript (ES6+):** Lógica interativa de manipulação do DOM e processamento de dados.
* **Fetch API:** Consumo de serviços HTTP assíncronos de forma nativa.

---

## 📝 Integração com o Blog

A seção de **Blog** da plataforma foi desenvolvida para exibir publicações e permitir interações dinâmicas sem a necessidade de recarregar a página, consumindo um back-end unificado via requisições assíncronas.

### Funcionamento do Fluxo Técnico:
1. **Listagem de Posts (GET):** Ao abrir a página do blog, a função `getPosts()` realiza uma chamada HTTP para obter os posts do servidor. O retorno JSON é tratado pela função `displayPosts()`, que cria dinamicamente os cards HTML contendo o título, conteúdo e autor de cada postagem.
2. **Criação de Conteúdo (POST):** Através de um formulário de envio, o usuário digita o Título, Conteúdo e Autor do post. Ao clicar em enviar, o manipulador de eventos intercepta o envio da página, encapsula os campos em um objeto JSON e realiza uma requisição HTTP. Em caso de sucesso, o formulário é limpo e a função `getPosts()` é executada novamente para atualizar a listagem com o novo post.
3. **Exclusão de Posts (DELETE):** Cada card de post possui um botão com o ícone de lixeira. Ao ser clicado, a função `deletePost(postId)` envia uma solicitação de remoção passando o identificador exclusivo do post na URL. Após o sucesso da exclusão na API, a lista é recarregada para sincronizar a tela.

---

## 📡 Endpoints da API Utilizados

Todas as comunicações com a API utilizam a URL base:
`https://blog-api.seedabit.org.br`

As chamadas requerem a autenticação da chave do grupo enviada através do cabeçalho personalizado `x-api-key`.

| Método | Endpoint | Descrição | Corpo / Payload (JSON) | Headers Obrigatórios |
| :--- | :---: | :--- | :--- | :--- |
| **GET** | `/api/posts` | Busca e retorna a listagem completa de postagens. | N/A | `x-api-key`, `accept: */*` |
| **POST** | `/api/posts` | Cria uma nova publicação no blog. | `{ "title": "...", "content": "...", "author": "..." }` | `x-api-key`, `Content-Type: application/json`, `accept: */*` |
| **DELETE** | `/api/posts/{id}` | Apaga a publicação correspondente ao ID informado na rota. | N/A | `x-api-key`, `accept: */*` |

---
