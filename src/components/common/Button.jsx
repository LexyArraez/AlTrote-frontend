
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
  'py-3 font-medium text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary: 'w-full rounded-xl bg-primary-light hover:bg-primary-dark text-white',
  dark: 'w-full rounded-xl bg-neutral hover:bg-neutral-light text-white',
  social: 'rounded-xl bg-white hover:bg-cream text-neutral text-sm border border-neutral-lighter flex items-center justify-center gap-2',
  role: 'rounded-xl flex-1 flex flex-col items-center gap-2 py-4 border-2 border-neutral-lighter bg-white hover:border-primary/50',
  ghost: 'w-auto rounded-lg bg-transparent hover:bg-cream text-primary text-md flex items-center gap-1.5 py-2 px-3',
  fab: 'w-14 h-14 !p-0 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg',
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
