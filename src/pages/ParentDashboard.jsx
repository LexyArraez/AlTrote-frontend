import { useNavigate } from 'react-router-dom'
import { AppHeader } from '../components/layout/navbar/AppHeader'
import { useAuth } from '../hooks/context/AuthProvider'
import { handleLogout } from '../constants/navBar'

export function ParentDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-cream">
      <AppHeader
        userName={user?.full_name}
        navItems={[
          { to: '/dashboard-padre', label: 'Panel' },
          { to: '/familia', label: 'Familia' },
          { to: '/tienda', label: 'Tienda' },
          { to: '/historial', label: 'Historial' },
        ]}
        onLogout={handleLogout}
      />
      <main className="max-w-6xl mx-auto p-6">
        <p>Contenido del dashboard aqui</p>
      </main>
    </div>
  )
}