'use client'
import React, { useEffect, useState } from 'react'

type Task = {
  id: number
  title: string
  description: string
  status: string
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])


  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/tasks')
      const data = await response.json()
      setTasks(data.data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  // Update task status
  const updateTask = async (id: number, status: string) => {
    try {
      const response = await fetch(`http://localhost:8000/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })
      if (response.ok) {
        fetchTasks()
      }
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  // Delete task
  const deleteTask = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/api/tasks/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        fetchTasks()
      }
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-dark mb-6">Task Manager</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white shadow-lg rounded-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-dark">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <div
              className={`mt-4 inline-block px-4 py-2 rounded-full text-white ${
                task.status === 'Completed'
                  ? 'bg-secondary'
                  : task.status === 'In Progress'
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              }`}
            >
              {task.status}
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                className="bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
                onClick={() => updateTask(task.id, 'In Progress')}
              >
                In Progress
              </button>
              <button
                className="bg-secondary text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
                onClick={() => updateTask(task.id, 'Completed')}
              >
                Complete
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks
