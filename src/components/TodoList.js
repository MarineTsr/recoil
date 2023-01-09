import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { todoListFilter } from "state";

function TodoList() {
  const todoList = useRecoilValue(todoListFilter);

  return (
    <ul>
      {!!todoList && todoList.length > 0 ? (
        todoList.map((item) => (
          <li key={item._id}>
            <TodoItem item={item} />
          </li>
        ))
      ) : (
        <li>Aucune todo pour le moment</li>
      )}
    </ul>
  );
}

export default TodoList;
