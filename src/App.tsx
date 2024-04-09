import Kanban from "./components/Kanban";

// Define initial columns data
const initialColumns = [
  {
    title: 'To Do',
    tasks: ['Task 1', 'Task 2', 'Task 3']
  },
  {
    title: 'In Progress',
    tasks: ['Task 4', 'Task 5']
  },
  {
    title: 'Done',
    tasks: ['Task 6']
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
