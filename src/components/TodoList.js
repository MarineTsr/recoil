import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { todoListState } from "state";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  console.log(todoList);

  return (
    <ul>
      {todoList.length > 0 ? (
        todoList.map((item) => (
          <li key={item._id}>
            <TodoItem content={item.content} />
          </li>
        ))
      ) : (
        <li>Aucune todo pour le moment</li>
      )}
    </ul>
  );
}

export default TodoList;
