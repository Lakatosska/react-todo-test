import {FC} from "react";
import {ITask} from "../../types/task.ts";
import styles from './TaskFilter.module.css';

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
    <div className={styles.info}>
      <span>{`${activeTasksCount} items left`}</span>
      <div className={styles.buttonGroup}>
        {buttons.map(({ name, label }) => (
          <button
            key={name}
            onClick={() => setFilter(name as 'all' | 'active' | 'completed')}
            className={`button ${filter === name ? 'button-primary' : 'button-secondary'}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;