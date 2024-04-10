import Kanban from "./components/Kanban";

// Define initial columns data
const initialColumns = [
  {
    title: 'To Do',
    tasks: ['Task 1', 'Task 2', 'Task 3'],
    maxTasks: 1000,
  },
  {
    title: 'In Progress',
    tasks: ['Task 4', 'Task 5'],
    maxTasks: 2
  },
  {
    title: 'Done',
    tasks: ['Task 6'],
    maxTasks: 1000,
  }
];

const App = () => {

  return (
    <>
      <Kanban initialColumns={initialColumns} />
    </>
  )
}

export default App
