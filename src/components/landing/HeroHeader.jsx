import { Icon } from '@iconify/react'
import { FloatingBadge } from '../landing/FloatingBadge'

export const HeroHeader = () => {
    return (
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
    )
}
