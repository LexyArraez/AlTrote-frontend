import { Icon } from '@iconify/react'
import { SectionHeader } from './SectionHeader'
import { TaskItem } from '../../common/TaskItem'
import { StatusBadge } from '../../common/StatusBadge'
import { Button } from '../../common/Button'
import { getTaskIcon } from '../../../utils/getTaskIcon'

import React from 'react'

export const CurrentTasksSection = ({ tasks, loading, error, onEdit, onDelete }) => {
    return (
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
                                <Button
                                    variant="icon-plain"
                                    onClick={() => onEdit(task)}
                                    aria-label="Editar tarea"
                                    className="hover:text-primary"
                                >
                                    <Icon icon="mdi:pencil-outline" width="18" height="18" />
                                </Button>
                                <Button
                                    variant="icon-plain"
                                    onClick={() => onDelete(task.id)}
                                    aria-label="Eliminar tarea"
                                    className="hover:text-tertiary-dark"
                                >
                                    <Icon icon="mdi:trash-can-outline" width="18" height="18" />
                                </Button>
                            </div>
                        </TaskItem>
                    )
                })}
            </div>
        </section>
    )
}
