
import { Icon } from '@iconify/react'
import { useAuthForm } from '../hooks/useAuthForm'
import { HeroHeader } from '../components/landing/HeroHeader'
import { AuthForm } from '../components/landing/AuthForm'
import { FeatureCard } from '../components/common/FeatureCard'

export const LandingPage = () => {
  const authProps = useAuthForm()

  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 gap-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm">
        <HeroHeader />
        <AuthForm authProps={authProps} />
      </div>

      <aside className="w-full max-w-4xl flex gap-3">
        <FeatureCard
          icon={<Icon icon="mdi:check-circle-outline" width="24" height="24" />}
          label="Tareas Listas"
          color="secondary"
        />
        <FeatureCard
          icon={<Icon icon="mdi:star-outline" width="24" height="24" />}
          label="Gana Puntos"
          color="tertiary"
        />
      </aside>
    </main>
  )
}