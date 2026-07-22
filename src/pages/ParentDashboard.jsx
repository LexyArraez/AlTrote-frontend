import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { AppHeader } from '../components/layout/navbar/AppHeader'
import { useAuth } from '../hooks/context/AuthProvider'
import { useTasks } from '../hooks/useTasks'
import { useChildren } from '../hooks/useChildren'
import { handleLogout as defaultLogoutHandler } from '../constants/navBar'
import { TaskItem } from '../components/common/TaskItem'
import { StatusBadge } from '../components/common/StatusBadge'
import { Button } from '../components/common/Button'
import { CreateTaskModal } from '../components/dashboard/CreateTaskModal'
import { SectionHeader } from '../components/dashboard/SectionHeader'
import { FamilyMemberCard } from '../components/dashboard/FamilyMemberCard'
import { ProgressRing } from '../components/dashboard/ProgressRing'
import { GoalBanner } from '../components/dashboard/GoalBanner'
import { getTaskIcon } from '../utils/getTaskIcon'

const RING_COLORS = ['primary', 'secondary', 'tertiary']


export const ParentDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { tasks, loading, error, addTask, editTask, removeTask } = useTasks()
  const { children } = useChildren()

  const [modalOpen, setModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  const handleDelete = (taskId) => {
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

  const childrenStats = children.map((child) => {
    const childTasks = tasks.filter((t) => t.assigned_to_id === child.id)
    const completed = childTasks.filter((t) => t.status === 'completada').length
    const pending = childTasks.length - completed
    const completion = childTasks.length ? Math.round((completed / childTasks.length) * 100) : 0
    return { ...child, pendingTasks: pending, completion }
  })

  const overallCompletion = childrenStats.length
    ? Math.round(childrenStats.reduce((sum, c) => sum + c.completion, 0) / childrenStats.length)
    : 0

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

      <main className="max-w-6xl mx-auto pb-24">
        <h1 className='text-4xl font-bold'>¡Hola, Papá!</h1>
        <h3 className='mt-1'>Aquí tienes un resumen de cómo va el equipo hoy.</h3>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr_1fr] gap-4 mt-10">

          <section className="bg-white rounded-2xl p-4 border border-neutral-lighter">
            <SectionHeader title="Familia vinculada" color="primary" />
            <div className="space-y-2">
              {childrenStats.map((child) => (
                <FamilyMemberCard
                  key={child.id}
                  name={child.full_name}
                  pendingTasks={child.pendingTasks}
                  points={child.points_balance}
                />
              ))}
              {childrenStats.length === 0 && (
                <p className="text-sm text-neutral-light">Aún no tienes hijos vinculados.</p>
              )}

            </div>
          </section>

          <section className="bg-white rounded-2xl p-4 border border-neutral-lighter">
            <SectionHeader title="Tareas en curso" linkLabel="Ver todas" color="secondary" />

            <div className="space-y-2">
              {loading && <p className="text-sm text-neutral-light">Cargando tareas...</p>}
              {error && <p className="text-sm text-tertiary-dark">{error}</p>}
              {!loading && !error && tasks.length === 0 && (
                <p className="text-sm text-neutral-light">Aún no hay tareas creadas.</p>
              )}
              {tasks.map((task) => {
                const { icon, color } = getTaskIcon(task.title)
                return (
                  <TaskItem
                    key={task.id}
                    icon={<Icon icon={icon} width="20" height="20" />}
                    iconColor={color}
                    title={task.title}
                    subtitle={`${task.points_value} pts`}
                  >
                    <div className="flex items-center gap-2">
                      <StatusBadge status={task.status === 'completada' ? 'completed' : 'pending'} />
                      <button
                        type="button"
                        onClick={() => openEditModal(task)}
                        aria-label="Editar tarea"
                        className="text-neutral-light hover:text-primary transition-colors"
                      >
                        <Icon icon="mdi:pencil-outline" width="18" height="18" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(task.id)}
                        aria-label="Eliminar tarea"
                        className="text-neutral-light hover:text-tertiary-dark transition-colors"
                      >
                        <Icon icon="mdi:trash-can-outline" width="18" height="18" />
                      </button>
                    </div>
                  </TaskItem>
                )
              })}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-4 border border-neutral-lighter">
            <SectionHeader title="Cumplimiento" color="tertiary" />

            <div className="flex flex-col items-center gap-4 py-2">
              {childrenStats.map((child, i) => (
                <ProgressRing
                  key={child.id}
                  percentage={child.completion}
                  label={child.full_name}
                  color={RING_COLORS[i % RING_COLORS.length]}
                />
              ))}
              {childrenStats.length === 0 && (
                <p className="text-sm text-neutral-light">Sin datos todavía.</p>
              )}
            </div>

            {childrenStats.length > 0 && (
              <div className="mt-4">
                <GoalBanner percentage={overallCompletion} />
              </div>
            )}
          </section>

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

