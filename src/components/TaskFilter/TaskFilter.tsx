import {FC} from "react";
import {ITask} from "../../types/task.ts";

interface TaskFiltersProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  tasks: ITask[];
}

const TaskFilter: FC<TaskFiltersProps> = ({ filter, setFilter, tasks }) => {
  const activeTasksCount = tasks.filter(task => !task.completed).length;

  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  return (
    <div>
      <span>{`${activeTasksCount} items left`}</span>
      <div>
        {buttons.map(({ name, label }) => (
          <button
            key={name}
            onClick={() => setFilter(name as 'all' | 'active' | 'completed')}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;