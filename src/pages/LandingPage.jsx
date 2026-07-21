import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Button } from '../components/common/Button'
import { Input } from '../components/landing/Input'
import { Tabs } from '../components/landing/Tabs'
import { RoleCard } from '../components/landing/RoleCard'
import { FeatureCard } from '../components/common/FeatureCard'
import { FloatingBadge } from '../components/landing/FloatingBadge'
import { Checkbox } from '../components/landing/Checkbox'

export const LandingPage = () => {

    const [tab, setTab] = useState('login')
    const [role, setRole] = useState('padre')

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [acceptedTerms, setAcceptedTerms] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (tab === 'login') {
            console.log('Login:', { email, password })
        } else {
            console.log('Registro:', { role, fullName, email, password })
        }
    }

    return (
        <main className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 gap-4">
            <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm">

                <header className="flex-1 p-10 flex flex-col justify-center bg-cream ">
                    <div className="flex items-center gap-2 ">
                        <img src="/screen.png" alt="" />
                    </div>

                    <h4 className='flex md:hidden text-primary'>Organizar es divertido, crecer es un logro.</h4>

                    <h1 className="text-3xl font-bold text-black mb-5 hidden md:flex">
                        Organiza tu hogar con alegría
                    </h1>

                    <p className="text-primary text-lg mb-10 hidden md:flex">
                        Convierte las tareas diarias en logros compartidos. Un espacio donde la
                        familia colabora y crece unida.
                    </p>
                    <div className="relative  rounded-xl overflow-hidden  from-primary-light to-secondary-light aspect-auto mt-8 hidden md:flex">
                        <img
                            src="/img.al.png"
                            alt="Familia organizando tareas del hogar"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.style.display = 'none' }}
                        />

                        <FloatingBadge
                            variant="pill"
                            icon={<Icon icon="mdi:star" width="14" height="14" />}
                            text="+50 Puntos"
                            color="secondary"
                            className="absolute top-3 right-3"
                        />

                        <FloatingBadge
                            variant="card"
                            icon={<Icon icon="mdi:check" width="16" height="16" />}
                            text="Cama hecha"
                            subtext="Completado"
                            className="absolute bottom-3 left-3"
                        />
                    </div>

                </header>

                <section className='flex-1 p-10 bg-white'>

                    <Tabs
                        activeTab={tab}
                        onChange={setTab}
                        options={[
                            { value: 'login', label: 'Iniciar sesión' },
                            { value: 'register', label: 'Crear cuenta' },
                        ]}

                    />


                    <form onSubmit={handleSubmit} className='mt-6 space-y-4'>

                        {tab === 'register' && (
                            <>
                                <div
                                    role="radiogroup"
                                    aria-label="¿Quién va a usar Al Trote?"
                                    className="flex gap-3"
                                >
                                    <RoleCard
                                        icon={<Icon icon="mdi:account-tie-outline" width="24" height="24" />}
                                        label="Padre/Tutor"
                                        selected={role === 'padre'}
                                        onClick={() => setRole('padre')}
                                    />
                                    <RoleCard
                                        icon={<Icon icon="mdi:account-school-outline" width="24" height="24" />}
                                        label="Hijo/Estudiante"
                                        selected={role === 'hijo'}
                                        onClick={() => setRole('hijo')}
                                    />
                                </div>

                                <Input
                                    label="Nombre completo"
                                    type="text"
                                    placeholder="Tu nombre"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </>
                        )}

                        <Input
                            label="Correo electrónico"
                            type="email"
                            placeholder="ejemplo@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <Input
                            label="Contraseña"
                            type="password"
                            placeholder="Mínimo 8 caracteres"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {tab === 'login' && (
                            <a href="#" className="block text-right text-sm font-semibold text-primary hover:underline">
                                ¿Olvidaste tu contraseña?
                            </a>
                        )}
                        {tab === 'register' && (
                            <Checkbox
                                checked={acceptedTerms}
                                onChange={(e) => setAcceptedTerms(e.target.checked)}
                                required
                            >
                                Acepto los{' '}
                                <a href="#" className="text-primary underline">términos y condiciones</a>{' '}
                                y la{' '}
                                <a href="#" className="text-primary underline">política de privacidad</a>{' '}
                                de la familia.
                            </Checkbox>
                        )}

                        <Button type="submit" variant={tab === 'login' ? 'primary' : 'primary'}>
                            {tab === 'login' ? 'Entrar' : 'Registrarme ahora'}
                        </Button>


                        <div role="separator" aria-label="o continua con" className="flex items-center gap-3 my-2">
                            <span className="flex-1 h-px bg-neutral-lighter" />
                            <span className="text-xs text-neutral-light">O CONTINÚA CON</span>
                            <span className="flex-1 h-px bg-neutral-lighter" />
                        </div>


                        <div className="flex gap-3">
                            <Button variant="social" className="flex-1">
                                <Icon icon="logos:google-icon" width="18" height="18" />
                                Google
                            </Button>

                            <Button variant="social" className="flex-1">
                                <Icon icon="mdi:apple" width="20" height="20" />
                                Apple
                            </Button>

                        </div>
                        <div>
                            <h4 className='text-xs mt-10 text-center font-bold text-primary'> © 2026 Al Trote. Hecho con ♡ para familias organizadas.</h4>
                        </div>

                    </form>
                </section>
            </div>
            <aside className="w-full max-w-4xl  gap-3 flex md:hidden">
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
