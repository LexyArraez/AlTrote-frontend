import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { AppHeader } from '../components/layout/navbar/AppHeader'
import { Button } from '../components/common/Button'
import { CreateTaskModal } from '../components/dashboard/CreateTaskModal'
import { useAuth } from '../hooks/context/AuthProvider'
import { useTasks } from '../hooks/useTasks'
import { useChildren } from '../hooks/useChildren'
import { useHousehold } from '../hooks/useHousehold'
import { useDashboardStats } from '../hooks/useDashboardStats'
import { LinkedFamilySection } from '../components/dashboard/sections/LinkedFamilySection'
import { CurrentTasksSection } from '../components/dashboard/sections/CurrentTasksSection'
import { ComplianceSection } from '../components/dashboard/sections/ComplianceSection'




export const ParentDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const { tasks, loading, error, addTask, editTask, removeTask } = useTasks()
  const { children } = useChildren()
  const { household } = useHousehold()

  const { childrenStats, overallCompletion } = useDashboardStats(children, tasks)

  const [modalOpen, setModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  const handleDeleteTask = (taskId) => {
    if (window.confirm('¿Seguro que quieres eliminar esta tarea?')) {
      removeTask(taskId)
    }
  }

  const openCreateModal = () => {
    setEditingTask(null)
    setModalOpen(true)
  }

  const openEditModal = (task) => {
    setEditingTask(task)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setEditingTask(null)
  }

  return (
    <div className="min-h-screen bg-cream">
      <AppHeader
        userName={user?.full_name}
        navItems={[
          { to: '/dashboard-padre', label: 'Panel' },
          { to: '/familia', label: 'Familia' },
          { to: '/tienda', label: 'Tienda' },
          { to: '/historial', label: 'Historial' },
        ]}
        onLogout={handleLogout}
      />

      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <LinkedFamilySection
            household={household}
            childrenStats={childrenStats}
          />

          <CurrentTasksSection
            tasks={tasks}
            loading={loading}
            error={error}
            onEdit={openEditModal}
            onDelete={handleDeleteTask}
          />

          <ComplianceSection
            childrenStats={childrenStats}
            overallCompletion={overallCompletion}
          />
        </div>
      </main>

      <Button
        variant="fab"
        onClick={openCreateModal}
        className="fixed bottom-6 right-6"
        aria-label="Crear tarea"
      >
        <Icon icon="mdi:plus" width="24" height="24" />
      </Button>

      <CreateTaskModal
        open={modalOpen}
        onClose={closeModal}
        onCreate={addTask}
        onSave={editTask}
        task={editingTask}
      />
    </div>
  )
}

