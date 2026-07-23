const COLOR_STROKE = {
    primary: '#FF9F1C',
    secondary: '#2EC4B6',
    tertiary: '#FF5D8F',
}

export const ProgressRing = ({ percentage, label, color = 'secondary', size = 88 }) => {
    const strokeWidth = 8
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (Math.min(percentage, 100) / 100) * circumference

    return (
        <div className="flex flex-col items-center gap-1.5">
            <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size} className="-rotate-90">
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="var(--color-neutral-lighter)"
                        strokeWidth={strokeWidth}
                    />
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={COLOR_STROKE[color]}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 0.4s ease' }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-neutral">{percentage}%</span>
                </div>
            </div>
            <span className="text-xs font-medium text-neutral-light">{label}</span>
        </div>
    )
}
