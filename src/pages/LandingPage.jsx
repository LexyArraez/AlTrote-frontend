import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Button } from '../components/common/Button'
import { Input } from '../components/landing/Input'
import { FeatureCard } from '../components/common/FeatureCard'

export const LandingPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario enviado')
    }

    return (
        <main className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 gap-4">
            <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm">

                <header className="flex-1 p-10 flex flex-col justify-center bg-cream">
                    <div className="flex items-center gap-2 mb-6">
                        <img src="/screen.png" alt="" />
                    </div>

                    <h1 className="text-3xl font-bold text-neutral mb-3">
                        Organiza tu hogar con alegría
                    </h1>

                    <p className="text-neutral-light">
                        Convierte las tareas diarias en logros compartidos. Un espacio donde la
                        familia colabora y crece unida.
                    </p>
                </header>

                <section className='flex-1 p-10 bg-white'>

                    <nav aria-label="Tipo de acceso">
                        {/* Aqui va tu Tabs: Iniciar sesion / Crear cuenta */}
                    </nav>


                    <form onSubmit={handleSubmit}>
                        <Input label="Correo electronico" type="email" />
                        <Input label="Contraseña" type="password" />

                        <a href="#" className="text-sm text-primary">
                            ¿Olvidaste tu contraseña?
                        </a>

                        <Button type="submit" variant="primary">Entrar</Button>
                    </form>
                    <div role="separator" aria-label="o continua con">
                        O CONTINÚA CON
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
                </section>
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
