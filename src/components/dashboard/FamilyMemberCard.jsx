import { Avatar } from '../layout/navbar/Avatar'


export const FamilyMemberCard = ({ name, avatarSrc, pendingTasks, points }) => {
    return (
        <article className="flex items-center gap-3 p-3 rounded-xl border border-neutral-lighter bg-white">
            <Avatar name={name} src={avatarSrc} size="md" />

            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral truncate">{name}</p>
                <p className="text-xs text-neutral-light">
                    {pendingTasks} {pendingTasks === 1 ? 'tarea pendiente' : 'tareas pendientes'}
                </p>
            </div>

            <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary-dark">
                {points} pts
            </span>
        </article>
    )
}
