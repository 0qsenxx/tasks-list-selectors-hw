import Task from "../Task/Task";
import css from "./TasksList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "../../redux/tasks/tasksSelectors";
import { useEffect } from "react";
import { getTasks } from "../../redux/tasks/tasksOperations";
import { selectFilterStatus } from "../../redux/filters/filtersSelectrs";

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilterStatus);
  const activeTasks = tasks.filter((task) => task.completed === false);
  const completedTasks = tasks.filter((task) => task.completed === true);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {filter === "all" &&
        tasks.map((task) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      {filter === "active" &&
        activeTasks.map((task) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      {filter === "completed" &&
        completedTasks.map((task) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
    </ul>
  );
};

export default TasksList;
