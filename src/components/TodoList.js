import TodoItem from "./TodoItem";
import TodoInfos from "./TodoInfos";
import { useRecoilValue } from "recoil";
import { todoListFilter, extractTodoFilter } from "state";
import { useState } from "react";

function TodoList() {
  const [selectedId, setSelectedId] = useState(null);
  const todoList = useRecoilValue(todoListFilter);
  const todoItem = useRecoilValue(extractTodoFilter(selectedId));

  return (
    <>
      <ul>
        {!!todoList && todoList.length > 0 ? (
          todoList.map((item) => (
            <li key={item._id}>
              <TodoItem
                item={item}
                showDetail={() => setSelectedId(item._id)}
              />
            </li>
          ))
        ) : (
          <li>Aucune todo pour le moment</li>
        )}
      </ul>
      <TodoInfos item={todoItem} />
    </>
  );
}

export default TodoList;
