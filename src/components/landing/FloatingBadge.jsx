const COLOR_STYLES = {
  secondary: 'bg-secondary text-white',
  primary: 'bg-primary text-white',
  white: 'bg-white text-neutral',
}
function PillBadge({ icon, text, color, className }) {
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-md text-xs font-medium ${COLOR_STYLES[color]} ${className}`}>
      {icon}
      {text}
    </div>
  )
}

function CardBadge({ icon, text, subtext, className }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-xl shadow-md bg-white ${className}`}>
      <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary-dark flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral leading-tight">{text}</p>
        {subtext && <p className="text-[11px] text-neutral-light leading-tight">{subtext}</p>}
      </div>
    </div>
  )
}

export function FloatingBadge({ variant = 'pill', ...props }) {
  return variant === 'pill' ? <PillBadge {...props} /> : <CardBadge {...props} />
}