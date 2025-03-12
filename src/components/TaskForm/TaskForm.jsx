import Button from "../Button/Button";
import css from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/tasksOperations";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;
