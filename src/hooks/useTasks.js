import { useCallback, useEffect, useState } from 'react'
import { useAuth } from './context/AuthProvider'
import * as taskAdapter from '../adapters/taskAdapter'

export const useTasks = () => {
  const { firebaseUser } = useAuth()

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadTasks = useCallback(async () => {
    if (!firebaseUser) return

    setLoading(true)
    setError('')
    try {
      const idToken = await firebaseUser.getIdToken()
      const data = await taskAdapter.getTasks(idToken)
      setTasks(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [firebaseUser])

  useEffect(() => {
    loadTasks()
  }, [loadTasks])

  const addTask = useCallback(
    async (taskData) => {
      const idToken = await firebaseUser.getIdToken()
      const newTask = await taskAdapter.createTask(idToken, taskData)
      setTasks((prev) => [...prev, newTask])
      return newTask
    },
    [firebaseUser]
  )

  const editTask = useCallback(
    async (taskId, taskData) => {
      const idToken = await firebaseUser.getIdToken()
      const updated = await taskAdapter.updateTask(idToken, taskId, taskData)
      setTasks((prev) => prev.map((t) => (t.id === taskId ? updated : t)))
      return updated
    },
    [firebaseUser]
  )

  const removeTask = useCallback(
    async (taskId) => {
      const idToken = await firebaseUser.getIdToken()
      await taskAdapter.deleteTask(idToken, taskId)
      setTasks((prev) => prev.filter((t) => t.id !== taskId))
    },
    [firebaseUser]
  )

  return { tasks, loading, error, addTask, editTask, removeTask, reload: loadTasks }
}

