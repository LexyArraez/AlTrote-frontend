
export const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  ...rest
}) => {
  const base =
    'w-full py-3 rounded-xl font-medium text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-primary-light hover:bg-primary-dark text-white',
    dark: 'bg-neutral hover:bg-neutral-light text-white',
    social: 'bg-white hover:bg-cream text-neutral text-sm border border-neutral-lighter flex items-center justify-center gap-2',
    role: 'flex-1 flex flex-col items-center gap-2 py-4 rounded-xl border-2 border-neutral-lighter bg-white hover:border-primary/50',
  }
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
