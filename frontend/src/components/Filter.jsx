const Filter = ({ category, status, setCategory, setStatus }) => {
  return (
    <div className="w-full py-5 flex gap-2">
      <select
        className="w-1/2 text-lg bg-white px-2 border-2 border-gray-400"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Filtrar por categoria</option>
        <option value="PESSOAL">Pessoal</option>
        <option value="TRABALHO">Trabalho</option>
        <option value="ESTUDO">Estudo</option>
      </select>

      <select
        className="w-1/2 text-lg bg-white px-2 border-2 border-gray-400"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Filtrar por status</option>
        <option value="PENDENTE">Pendente</option>
        <option value="CONCLUIDO">Concluído</option>
      </select>
    </div>
  );
};

export default Filter;
