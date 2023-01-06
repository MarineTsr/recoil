import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "components/TodoList";
import AddTodo from "components/AddTodo";

function App() {
  return (
    <div className="container">
      <div className="card my-5">
        <div className="card-header px-4">
          <h1>Recoil</h1>
        </div>

        <div className="card-body px-4">
          <AddTodo />
          <hr/>
          <h2 className="card-title mt-4">TodoList</h2>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
