const ICON_BG = {
    primary: 'bg-primary/15 text-primary',
    secondary: 'bg-secondary/15 text-secondary-dark',
    tertiary: 'bg-tertiary/15 text-tertiary-dark',
    neutral: 'bg-neutral-lighter text-neutral',
}

export const TaskItem = ({ icon, iconColor = 'primary', title, subtitle, children }) => {
    return (
        <article className="flex items-center gap-3 p-3 rounded-xl border border-neutral-lighter bg-white">
            <div
                aria-hidden="true"
                className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${ICON_BG[iconColor]}`}
            >
                {icon}
            </div>

            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral truncate">{title}</p>
                {subtitle && <p className="text-xs text-neutral-light truncate">{subtitle}</p>}
            </div>

            <div className="shrink-0">{children}</div>
        </article>
    )
}
