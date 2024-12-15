import TaskList from './components/TaskList';  // Adjust the path as needed
import './globals.css';  

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-4xl font-bold">Task Management App</h1>
      </header>
      <main className="container mx-auto p-6">
        <TaskList />
      </main>
    </div>
  );
}
