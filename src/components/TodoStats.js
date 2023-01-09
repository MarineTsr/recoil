import { useRecoilValue } from "recoil";
import { statsFilter } from "state";

function TodoStats() {
  const stats = useRecoilValue(statsFilter);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nb. traitées</th>
          <th scope="col">% traité</th>
          <th scope="col">Nb. restantes</th>
          <th scope="col">% restant</th>
          <th scope="col">NB. total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{stats.doneNb}</th>
          <td>{stats.donePercentage}</td>
          <td>{stats.wipNb}</td>
          <td>{stats.wipPercentage}</td>
          <td>{stats.totalNb}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TodoStats;
