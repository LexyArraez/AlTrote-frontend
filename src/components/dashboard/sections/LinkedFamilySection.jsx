import { useState } from "react"
import { Icon } from '@iconify/react'
import { SectionHeader } from '../sections/SectionHeader'
import { FamilyMemberCard } from '../FamilyMemberCard'
import { Button } from '../../common/Button'


export const LinkedFamilySection = ({ household, childrenStats }) => {
    const [codeCopied, setCodeCopied] = useState(false)

    const handleCopyCode = async () => {
        if (!household?.invite_code) return
        await navigator.clipboard.writeText(household.invite_code)
        setCodeCopied(true)
        setTimeout(() => setCodeCopied(false), 2000)
    }
    return (
        <section className="bg-white rounded-2xl p-4 border border-neutral-lighter">
            <SectionHeader title="Familia vinculada" color="primary" />

            {household && (
                <div className="flex items-center gap-2 mb-3 p-2.5 rounded-xl bg-cream">
                    <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-wide text-neutral-light">Código de invitación</p>
                        <p className="text-sm font-bold tracking-widest text-primary-dark truncate">
                            {household.invite_code}
                        </p>
                    </div>
                    <Button
                        variant="icon"
                        onClick={handleCopyCode}
                        aria-label="Copiar código"
                        className="hover:text-primary hover:bg-white"
                    >
                        <Icon icon={codeCopied ? 'mdi:check' : 'mdi:content-copy'} width="16" height="16" />
                    </Button>
                </div>
            )}

            <div className="space-y-2">
                {childrenStats.map((child) => (
                    <FamilyMemberCard
                        key={child.id}
                        name={child.full_name}
                        pendingTasks={child.pendingTasks}
                        points={child.points_balance}
                    />
                ))}

                {childrenStats.length === 0 && (
                    <p className="text-sm text-neutral-light">Aún no tienes hijos vinculados.</p>
                )}

            </div>
        </section>
    )
}
