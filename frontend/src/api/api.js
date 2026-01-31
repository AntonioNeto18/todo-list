const api_url = "http://localhost:8080/todos";
const default_headers = {
    'Content-Type': 'application/json',
}

export async function getTodos(category = null, status = null) {

    let filter = "";

    if (status && category) filter = `?category=${category}&status=${status}`;
    else if (status) filter = `?status=${status}`;
    else if (category) filter = `?category=${category}`;

    const response = await fetch(`${api_url}${filter}`);
    const data = await response.json();

    return data;
}

export async function deleteTodo(id) {

    const response = await fetch(`${api_url}/${id}`, {
        method: "DELETE"
    });
}

export async function createTodo(text, category) {

    const todo = { "text": text, "category": category }

    const response = await fetch(`${api_url}`, {
        method: "POST",
        headers: default_headers,
        body: JSON.stringify(todo)
    })
}

export async function updateCategory(id, category) {
    const response = await fetch(`${api_url}/${id}/category`, {
        method: "PATCH",
        headers: default_headers,
        body: JSON.stringify({"category": category})
    })
}

export async function updateStatus(id, status) {
    const response = await fetch(`${api_url}/${id}/status`, {
        method: "PATCH",
        headers: default_headers,
        body: JSON.stringify({"status": status})
    })
}