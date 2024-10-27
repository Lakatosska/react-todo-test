import useTasks from "./hooks/useTasks.ts";
import TaskInput from "./components/TaskInput/TaskInput.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";
import TaskFilter from "./components/TaskFilter/TaskFilter.tsx";
import styles from './App.module.css';

function App() {
  const {
    tasks,
    addTask,
    toggleTaskCompletion,
    deleteTask,
    editTask,
    filter,
    setTaskFilter,
  } = useTasks();

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo list</h1>
      <div className={styles.container}>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          editTask={editTask}
        />
        <TaskFilter
          filter={filter}
          setFilter={setTaskFilter}
          tasks={tasks}
        />
      </div>
    </div>
  );
};

export default App
