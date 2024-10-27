import {FC, useState, FormEvent} from 'react';
import {ITask} from "../../types/task.ts";

interface TaskInputProps {
  addTask: (task: ITask) => void;
}

const TaskInput: FC<TaskInputProps> = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskTitle.trim()) {
      addTask({ id: Date.now().toString(), title: taskTitle, completed: false });
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Type your task here..."
      />
      <button type="submit">
        Add Item
      </button>
    </form>
  );
};

export default TaskInput;