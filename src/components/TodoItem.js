import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "state";
import { updateTodo, deleteTodo } from "api";

function TodoItem({ item, showDetail }) {
  const [editedTodo, setEditedTodo] = useState(item.content);
  const setTodoListState = useSetRecoilState(todoListState);

  const handleTodoDelete = async () => {
    await deleteTodo(item);

    setTodoListState((oldState) =>
      oldState.filter((current) => current._id !== item._id)
    );
  };

  const handleTodoValidate = async () => {
    const updatedTodo = await updateTodo({ ...item, done: !item.done });

    setTodoListState((oldState) =>
      oldState.map((current) =>
        current._id === item._id ? updatedTodo : current
      )
    );
  };

  const handleTodoEditMode = () => {
    setTodoListState((oldState) =>
      oldState.map((current) =>
        current._id === item._id ? { ...current, edit: !current.edit } : current
      )
    );
  };

  const handleTodoEditSubmit = async (event) => {
    event.preventDefault();

    if (editedTodo.length > 0) {
      const updatedTodo = await updateTodo({
        ...item,
        content: editedTodo,
        edit: false,
      });

      setTodoListState((oldState) =>
        oldState.map((current) =>
          current._id === item._id ? updatedTodo : current
        )
      );
    }
  };

  return (
    <div className="my-2 d-flex align-items-center justify-content-between">
      {item.edit ? (
        <form
          className="input-group"
          onSubmit={(event) => handleTodoEditSubmit(event)}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Modifier la todo"
            value={editedTodo}
            onChange={(event) => setEditedTodo(event.target.value)}
          />
          <button className="btn btn-success" type="submit">
            Valider
          </button>
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => {
              handleTodoEditMode();
              setEditedTodo(item.content);
            }}
          >
            Annuler
          </button>
        </form>
      ) : (
        <>
          {item.done ? <del>{item.content}</del> : item.content}{" "}
          <div className="d-flex flex-end">
            <button
              type="button"
              className={
                item.done ? "btn btn-warning me-1" : "btn btn-success me-1"
              }
              title="Valider"
              onClick={handleTodoValidate}
            >
              {item.done ? "Annuler" : "Valider"}
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-1"
              title="Modifier"
              onClick={handleTodoEditMode}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary mx-1"
              title="Détail"
              onClick={showDetail}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger ms-1"
              title="Supprimer"
              onClick={handleTodoDelete}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
