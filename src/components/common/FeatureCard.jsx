const COLOR_STYLES = {
  secondary: 'bg-secondary/20 text-secondary-dark',
  tertiary: 'bg-tertiary/20 text-tertiary-dark',
}

export const FeatureCard = ({ icon, label, color = 'secondary' }) => {

  return (
    <article className={`flex-1 flex flex-col items-center justify-center gap-2 py-6 rounded-xl ${COLOR_STYLES[color]}`}>
      <div className="text-2xl" aria-hidden="true">{icon}</div>
      <p className="text-sm font-medium">{label}</p>
    </article>
  )
}

