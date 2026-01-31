import { useState, useEffect } from "react"

import { getTodos, deleteTodo, createTodo, updateCategory, updateStatus } from "./api/api";

import Container from "./components/Container"
import Title from "./components/Title"
import Todo from "./components/Todo";
import CreateTodo from "./components/CreateTodo";
import Modal from "./components/Modal";
import Filter from "./components/Filter";

function App() {

  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  function openModal(todo) {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedTodo(null);
  }

  async function loadTodos() {
    const data = await getTodos(category, status);
    setTodos(data);
  }

  async function handleDeleteTodos(id) {
    await deleteTodo(id);
    await loadTodos();
  }

  async function handleCreateTodo(text, category) {
    await createTodo(text, category)
    await loadTodos();
  }

  async function handleUpdateCategory(id, category) {
    await updateCategory(id, category)
    closeModal()
    await loadTodos()
  }

  async function handleUpdateStatus(id, status) {
    await updateStatus(id, status)
    closeModal()
    await loadTodos()
  }

  useEffect(() => {
    loadTodos();
  }, [category, status]);

  return (
    <section className="min-h-screen">
      <Container>
        <Title text="Lista de tarefas" />

        <Filter
          setCategory={setCategory}
          setStatus={setStatus}
          category={category}
          status={status}
          loadTodos={loadTodos}
        />

        {todos.length > 0 ? (
          todos.map((t) => (
            <Todo
              key={t.id}
              todo={t}
              handleDeleteTodos={handleDeleteTodos}
              onOpenModal={openModal}
            />
          ))
        ) :
          <p
            className="text-2xl text-center uppercase font-bold text-gray-500"
          >
            Nenhuma tarefa encontrada
          </p>
        }

        <CreateTodo
          handleCreateTodo={handleCreateTodo}
        />
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        todo={selectedTodo}
        updateCategory={handleUpdateCategory}
        updateStatus={handleUpdateStatus}
      />

    </section>
  )
}

export default App
