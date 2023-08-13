import './App.css';
import TaskForm from '../src/components/taskForm';
import TaskList from '../src/components/taskList';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>

      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
