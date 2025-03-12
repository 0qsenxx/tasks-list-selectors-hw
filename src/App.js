import "./App.css";
import { AppBar } from "./components/AppBar/AppBar";
import TaskForm from "./components/TaskForm/TaskForm";
import TasksList from "./components/TasksList/TasksList";

function App() {
  return (
    <div className="container">
      <AppBar />
      <TaskForm />
      <TasksList />
    </div>
  );
}

export default App;
