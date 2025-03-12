import { createSelector } from "@reduxjs/toolkit";

const selectTasks = (state) => state.tasks.tasks;
const selectTaskCount = createSelector([selectTasks], (tasks) => {
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});

export { selectTasks, selectTaskCount };
