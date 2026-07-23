import { SectionHeader } from '../sections/SectionHeader'
import { ProgressRing } from '../ProgressRing'
import { GoalBanner } from '../GoalBanner'

const RING_COLORS = ['primary', 'secondary', 'tertiary']

import React from 'react'

export const ComplianceSection = ({ childrenStats, overallCompletion }) => {
    return (
        <section className="bg-white rounded-2xl p-4 border border-neutral-lighter">
            <SectionHeader title="Cumplimiento" color="tertiary" />

            <div className="flex flex-col items-center gap-4 py-2">
                {childrenStats.map((child, i) => (
                    <ProgressRing
                        key={child.id}
                        percentage={child.completion}
                        label={child.full_name}
                        color={RING_COLORS[i % RING_COLORS.length]}
                    />
                ))}

                {childrenStats.length === 0 && (
                    <p className="text-sm text-neutral-light">Sin datos todavía.</p>
                )}
            </div>

            {childrenStats.length > 0 && (
                <div className="mt-4">
                    <GoalBanner percentage={overallCompletion} />
                </div>
            )}
        </section>
    )
}
