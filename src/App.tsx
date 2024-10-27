import useTasks from "./hooks/useTasks.ts";
import TaskInput from "./components/TaskInput/TaskInput.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";
import TaskFilter from "./components/TaskFilter/TaskFilter.tsx";


function App() {
  const {
    tasks,
    addTask,
    toggleTaskCompletion,
    deleteTask,
    filter,
    setTaskFilter,
  } = useTasks();

  return (
    <div>
      <h1>Todo list</h1>
      <div>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
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
