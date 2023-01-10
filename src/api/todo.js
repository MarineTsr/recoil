const TODO_API_URL = "https://restapi.fr/api/RecoilTodos";

export const getTodos = async () => {
  const response = await fetch(TODO_API_URL);

  if (response.ok) {
    const todoList = await response.json();
    return Array.isArray(todoList) ? todoList : [todoList];
  } else {
    throw new Error("Error : getTodos");
  }
};

export const getTodo = async (_id) => {
  const response = await fetch(`${TODO_API_URL}/${_id}`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error : getTodo");
  }
};

export const createTodo = async (todo) => {
  const response = await fetch(TODO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error : createTodo");
  }
};

export const updateTodo = async (todo) => {
  const { _id, ...todoRest } = todo;
  const response = await fetch(`${TODO_API_URL}/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoRest),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error : updateTodo");
  }
};

export const deleteTodo = async (todo) => {
  const response = await fetch(`${TODO_API_URL}/${todo._id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    return todo._id;
  } else {
    throw new Error("Error : deleteTodo");
  }
};
