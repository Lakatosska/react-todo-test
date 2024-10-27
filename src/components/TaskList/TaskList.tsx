import Task from '../Task/Task';
import {FC} from "react";
import {ITask} from "../../types/task.ts";

interface TaskListProps {
  tasks: ITask[];
  toggleTaskCompletion: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
