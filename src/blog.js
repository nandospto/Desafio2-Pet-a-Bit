const API_BASE_URL = "https://blog-api.seedabit.org.br/api"
const API_KEY = "key-32xxva5agp"

// função pra verificar a requisição em cada método
async function request(endpoint, opcoes = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY,
                ...opcoes.headers,
            },
            ...opcoes,
        });

        
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        }
        return null;
    } catch (error) {
        console.error(`Erro! Não foi possível requisitar para ${url}:`, error.message);
        throw error;
    }
}

export const BlogAPI = {
    getPosts: () => request("/posts", { method: "GET" }),
    createPost: (data) => request("/posts", { method: "POST", body: JSON.stringify(data) }),
    deletePost: (id) => request(`/posts/${id}`, { method: "DELETE" })
};