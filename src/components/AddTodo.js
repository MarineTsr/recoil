import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "state";

function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const setTodoListState = useSetRecoilState(todoListState);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!!newTodo && newTodo.length > 0) {
      setTodoListState((oldState) => [
        ...oldState,
        {
          _id: crypto.randomUUID(),
          content: newTodo,
          done: false,
          edit: false,
        },
      ]);
      setNewTodo("");
    }
  };

  return (
    <form className="input-group" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Saisir une nouvelle todo"
        value={newTodo}
        onChange={(event) => handleInputChange(event)}
      />
      <button className="btn btn-primary" type="submit">
        Ajouter
      </button>
    </form>
  );
}

export default AddTodo;
