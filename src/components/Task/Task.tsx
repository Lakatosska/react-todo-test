import {FC, useState} from "react";
import {ITask} from "../../types/task.ts";
import styles from './Task.module.css';


interface TaskItemProps {
  task: ITask;
  toggleTaskCompletion: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
  editTask: (taskId: string, newTitle: string) => void;
}

const Task: FC<TaskItemProps> = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleBlur = () => {
    if (editedTitle.trim()) {
      editTask(task.id, editedTitle); // Сохраняем изменения, если поле не пустое
    } else {
      setEditedTitle(task.title); // Если поле пустое, возвращаем оригинальное значение
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className={styles.checkbox}
        />

          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleBlur}
            className={`${styles.text} ${task.completed ? styles.textCompleted : ''} ${styles.textInput}`}
          />
      </div>
      <button onClick={() => deleteTask(task.id)} className="button button-danger">x</button>
    </li>
  );
};

export default Task;
