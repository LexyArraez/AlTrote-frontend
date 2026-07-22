import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { getNavLinkClass } from '../../../constants/navBar'
import { Button } from '../../common/Button'
import { Avatar } from './Avatar'


export const AppHeader = ({ userName, avatarSrc, navItems = [], onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-neutral-lighter">
      <div className="w-full px-10 py-1 flex items-center justify-between">

        <div className="flex items-center gap-70">
          <div className="flex items-center ">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden text-primary p-1 rounded-md hover:bg-neutral-lighter transition-colors"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <Icon icon={menuOpen ? 'mdi:close' : 'mdi:menu'} width="24" height="24" />
            </button>

            <img src="/screen.png" alt="Al Trote" className="h-20 w-auto" />
          </div>

          <nav aria-label="Navegación principal" className="hidden md:flex gap-1 ">
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to} className={getNavLinkClass}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-10">
          <Button variant="ghost" onClick={onLogout} className="hidden sm:flex items-center gap-2">
            <Icon icon="mdi:logout" width="20" height="20" />
            Cerrar sesión
          </Button>
          <Avatar name={userName} src={avatarSrc} size="md" />
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Navegación mobile" className="md:hidden border-t border-neutral-lighter px-4 py-3 flex flex-col gap-1">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={(navProps) => getNavLinkClass(navProps, true)}
            >
              {label}
            </NavLink>
          ))}
          <hr className="my-1 border-neutral-lighter" />
          <button
            type="button"
            onClick={onLogout}
            className="py-2 text-sm font-medium text-left text-primary-light hover:text-primary-dark flex items-center gap-2 transition-colors"
          >
            <Icon icon="mdi:logout" width="16" height="16" />
            Cerrar sesión
          </button>
        </nav>
      )}
    </header>
  )
}
