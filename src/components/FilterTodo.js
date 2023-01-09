import { useRecoilState } from "recoil";
import { filterState } from "state";

function FilterTodo() {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <select
      className="form-select w-auto"
      aria-label="Filter"
      onChange={(event) => setFilter(event.target.value)}
      value={filter}
    >
      <option value="all">Toutes les todos</option>
      <option value="done">Todos terminées</option>
      <option value="wip">Todos à faire</option>
    </select>
  );
}

export default FilterTodo;
