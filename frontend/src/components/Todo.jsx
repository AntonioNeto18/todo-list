const Todo = ({ todo, handleDeleteTodos, onOpenModal }) => {
    return (
        <div
            className="w-full bg-gray-100 shadow-sm px-10 py-5 shadow-black flex flex-col md:flex-row md:items-center justify-between my-10 cursor-pointer"
            onClick={() => onOpenModal(todo)}
        >
            <div
                className="flex flex-col"
            >
                <span className="md:text-3xl text-lg font-semibold">{todo.text}</span>
                <span
                    className={"text-lg font-bold capitalize"}
                >
                    {todo.category}
                </span>
            </div>

            <div className="flex items-center">

                <div className="flex flex-col items-start md:items-center gap-2">
                    <p className={`capitalize text-lg font-bold ${todo.status.toLowerCase() === "pendente"
                            ? "text-red-500"
                            : "text-green-500"
                        }`}>
                        <span className="font-semibold text-black">Status: </span>
                        {todo.status.toLowerCase()}
                    </p>

                    <button
                        className="bg-red-500 text-white text-lg uppercase w-fit h-fit text-center px-5 py-2 rounded-2xl cursor-pointer z-10 border-2 border-red-600 hover:bg-red-400 transition-all duration-300"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteTodos(todo.id)
                        }}
                    >
                        Deletar
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Todo