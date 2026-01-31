import { useState, useEffect } from "react";

const Modal = ({
  isOpen,
  onClose,
  todo,
  updateCategory,
  updateStatus
}) => {

  const [categoria, setCategoria] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (todo) {
      setCategoria(todo.category);
      setStatus(todo.status);
    }
  }, [todo]);

  if (!isOpen || !todo) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white py-10 px-8 w-[60%] rounded-2xl">

        {/* botão fechar */}
        <span
          className="absolute top-4 right-4 text-2xl cursor-pointer"
          onClick={() => onClose()}
        >
          ✕
        </span>

        <h2 className="text-2xl font-semibold mb-6">
          Editar tarefa
        </h2>

        {/* Categoria */}
        <div className="flex flex-col gap-2 mb-6">
          <label className="font-semibold text-lg">
            Categoria
          </label>

          <select
            className="w-full text-lg bg-white px-2 py-1 border-2 border-gray-400"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            <option value="PESSOAL">Pessoal</option>
            <option value="TRABALHO">Trabalho</option>
            <option value="ESTUDO">Estudo</option>
          </select>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-fit hover:bg-blue-400"
            onClick={() => updateCategory(todo.id, categoria)}
          >
            Atualizar categoria
          </button>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">
            Status
          </label>

          <select
            className="w-full text-lg bg-white px-2 py-1 border-2 border-gray-400"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Selecione um status</option>
            <option value="PENDENTE">Pendente</option>
            <option value="CONCLUIDO">Concluído</option>
          </select>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg w-fit hover:bg-green-400"
            onClick={() => updateStatus(todo.id, status)}
          >
            Atualizar status
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
