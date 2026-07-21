
export const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
  className = '',
}) => {
  const base =
    'w-full py-3 rounded-xl font-medium text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    dark: 'bg-neutral hover:bg-neutral-light text-white',
    social: 'bg-white hover:bg-cream text-neutral text-sm border border-neutral-lighter flex items-center justify-center gap-2',
  }
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
