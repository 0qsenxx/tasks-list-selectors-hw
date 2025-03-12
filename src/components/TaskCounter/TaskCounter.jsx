import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { selectTasks, selectTaskCount } from "../../redux/tasks/tasksSelectors";

const TaskCounter = () => {
  const tasks = useSelector(selectTasks);
  const tasksCount = useSelector(selectTaskCount);
  // console.log(tasksCount);
  // const activeTasks = tasks.filter((task) => task.completed === false).length;
  // const completedTasks = tasks.filter((task) => task.completed === true).length;

  return (
    <div>
      <p className={css.text}>Active: {tasksCount.active}</p>
      <p className={css.text}>Completed: {tasksCount.completed}</p>
    </div>
  );
};

export default TaskCounter;
