import { useState, useEffect } from 'react'
import { Modal } from './Modal'
import { Select } from './Select'
import { Input } from '../landing/Input'
import { Button } from '../common/Button'
import { useChildren } from '../../hooks/useChildren'

export const CreateTaskModal = ({ open, onClose, onCreate, onSave, task = null }) => {
    const { children, loading: loadingChildren } = useChildren()
    const isEditing = !!task

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('1')
    const [pointsValue, setPointsValue] = useState('10')
    const [assignedToId, setAssignedToId] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!open) return

        if (task) {
            setTitle(task.title || '')
            setDescription(task.description || '')
            setPriority(String(task.priority ?? '1'))
            setPointsValue(String(task.points_value ?? '10'))
            setAssignedToId(String(task.assigned_to_id ?? ''))
        } else {
            setTitle('')
            setDescription('')
            setPriority('1')
            setPointsValue('10')
            setAssignedToId('')
        }
        setError('')
    }, [open, task])

    const handleClose = () => {
        onClose()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSubmitting(true)

        const data = {
            title,
            description: description || undefined,
            priority: Number(priority),
            points_value: Number(pointsValue),
            assigned_to_id: Number(assignedToId),
        }

        try {
            if (isEditing) {
                await onSave(task.id, data)
            } else {
                await onCreate(data)
            }
            handleClose()
        } catch (err) {
            setError(err.message)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Modal open={open} onClose={handleClose} title={isEditing ? 'Editar tarea' : 'Crear tarea'}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej. Sacar la basura"
                    required
                />

                <Input
                    label="Descripción (opcional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detalles de la tarea"
                />

                <Select
                    label="Asignar a"
                    value={assignedToId}
                    onChange={(e) => setAssignedToId(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        {loadingChildren ? 'Cargando hijos...' : 'Selecciona un hijo'}
                    </option>
                    {children.map((child) => (
                        <option key={child.id} value={child.id}>
                            {child.full_name}
                        </option>
                    ))}
                </Select>

                <Select label="Prioridad" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="1">Baja</option>
                    <option value="2">Media</option>
                    <option value="3">Alta</option>
                </Select>

                <Input
                    label="Puntos"
                    type="number"
                    value={pointsValue}
                    onChange={(e) => setPointsValue(e.target.value)}
                    required
                />

                {error && (
                    <p role="alert" className="text-sm text-tertiary-dark bg-tertiary/10 rounded-lg px-3 py-2">
                        {error}
                    </p>
                )}

                <Button type="submit" variant="primary" disabled={submitting}>
                    {submitting ? 'Guardando...' : isEditing ? 'Guardar cambios' : 'Crear tarea'}
                </Button>
            </form>
        </Modal>
    )
}
