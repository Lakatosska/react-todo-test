import {FC} from "react";
import {ITask} from "../../types/task.ts";


interface TaskItemProps {
  task: ITask;
  toggleTaskCompletion: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

const Task: FC<TaskItemProps> = ({ task, toggleTaskCompletion, deleteTask}) => {

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <span>
          {task.title}
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)}>x</button>
    </li>
  );
};

export default Task;
