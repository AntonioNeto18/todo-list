import { useState } from "react"

import Subtitle from "./Subtitle"

const CreateTodo = ({handleCreateTodo}) => {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="mt-5 pt-5 w-full border-t-2 border-blue-500 flex flex-col">
        <Subtitle text="Criar Tarefa" />
        <form
          className="mt-5 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateTodo(text, category)
            setText("");
            setCategory("");
          }}
        >
            <input 
              className="w-full h-fit text-lg bg-white px-2 border-2 border-gray-400"
              type="text" 
              placeholder="Digite a tarefa aqui"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <select 
              className="w-full h-fit text-lg bg-white px-2 border-2 border-gray-400"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              <option value="PESSOAL">Pessoal</option>
              <option value="TRABALHO">Trabalho</option>
              <option value="ESTUDO">Estudo</option>
            </select>

            <button
              className="bg-green-500 text-lg border-2 border-green-700 text-center cursor-pointer hover:bg-green-300 font-bold transition-all duration-300"
              type="submit"
            >
                Criar
            </button>

        </form>
    </div>
  )
}

export default CreateTodo