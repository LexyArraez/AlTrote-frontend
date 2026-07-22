const STATUS_CONFIG = {
    review: { label: 'En revisión', className: 'bg-primary/15 text-primary-dark', dot: true },
    doing: { label: 'Haciendo', className: 'bg-neutral-lighter text-neutral-light', dot: false },
    pending: { label: 'Pendiente', className: 'bg-neutral-lighter text-neutral-light', dot: false },
    completed: { label: 'Completada', className: 'bg-secondary/15 text-secondary-dark', dot: false },
}

export const StatusBadge = () => {
    const config = STATUS_CONFIG[status] || STATUS_CONFIG.pending
    return (
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.className}`}>
            {config.dot && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
            {config.label}
        </div>
    )
}
