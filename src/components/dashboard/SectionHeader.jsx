const TITLE_COLORS = {
  primary: 'text-primary-dark',
  secondary: 'text-secondary-dark',
  tertiary: 'text-tertiary',
  neutral: 'text-neutral',
}


export const SectionHeader = ({ title, linkLabel, onLinkClick, color = 'neutral' }) => {
    return (
        <div className="flex items-center justify-between mb-3">
            <h2 className={`font-semibold text-2xl ${TITLE_COLORS[color]}`}>{title}</h2>
            {linkLabel && (
                <button
                    type="button"
                    onClick={onLinkClick}
                    className="text-sm font-medium text-secondary-dark hover:underline"
                >
                    {linkLabel}
                </button>
            )}
        </div>
    )
}
