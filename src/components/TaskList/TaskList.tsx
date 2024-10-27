import Task from '../Task/Task';
import {FC} from "react";
import {ITask} from "../../types/task.ts";
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: ITask[];
  toggleTaskCompletion: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
  editTask: (taskId: string, newTitle: string) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, toggleTaskCompletion, deleteTask, editTask }) => {
  return (
    <ul className={styles.list}>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
