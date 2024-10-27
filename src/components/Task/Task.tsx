import {FC} from "react";
import {ITask} from "../../types/task.ts";
import styles from './Task.module.css';


interface TaskItemProps {
  task: ITask;
  toggleTaskCompletion: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

const Task: FC<TaskItemProps> = ({ task, toggleTaskCompletion, deleteTask}) => {

  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className={styles.checkbox}
        />
        <span className={`${styles.text} ${task.completed ? styles.textCompleted : ''}`}>
          {task.title}
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)} className="button button-danger">x</button>
    </li>
  );
};

export default Task;
