
export const SIZES = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-lg',
}

export const getInitials = (name = '') =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(([char]) => char)
    .join('')
    .toUpperCase()

export const getNavLinkClass = ({ isActive }, isMobile = false) => {
    const base = 'text-md font-medium transition-colors'
    if (isMobile) {
      return `${base} py-2 ${isActive ? 'text-primary font-semibold' : 'text-neutral-light hover:text-neutral'}`
    }
    return `${base} px-3 py-2 ${
      isActive ? 'text-primary border-b-4 border-primary' : 'text-primary-dark hover:text-primary-light '
    }`
  }
  export const handleLogout = async () => {
    await logout()
    navigate('/')
  }
  
