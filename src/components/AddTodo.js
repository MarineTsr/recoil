import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "state";
import { createTodo } from "api";

function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const setTodoListState = useSetRecoilState(todoListState);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!!newTodo && newTodo.length > 0) {
      const createdTodo = await createTodo({
        content: newTodo,
        done: false,
        edit: false,
      });

      setTodoListState((oldState) => [...oldState, createdTodo]);
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
