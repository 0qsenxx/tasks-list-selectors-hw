import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../../redux/tasks/tasksOperations";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = (evt) => {
    const idTaskToDelete = evt.currentTarget.getAttribute("data-id");
    dispatch(deleteTask(idTaskToDelete));
  };

  const handleCompleteTask = (evt) => {
    dispatch(completeTask({ isTaskComplete: evt.target.checked, task }));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleCompleteTask}
        defaultChecked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete} data-id={task.id}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
