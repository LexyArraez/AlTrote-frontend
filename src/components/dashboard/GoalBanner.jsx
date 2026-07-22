
export const GoalBanner = ({ text, percentage }) => {
    return (
        <div className="bg-tertiary/10 rounded-xl p-3">
            <p className="text-xs font-semibold text-tertiary-dark mb-2">Meta grupal {text}</p>
            <div className="h-1.5 rounded-full bg-tertiary/20 overflow-hidden">
                <div
                    className="h-full bg-tertiary-dark rounded-full transition-all"
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                />
            </div>
        </div>
    )
}
