import { Icon } from '@iconify/react'
import { UNDER_CONSTRUCTION } from '../../constants/placeholders'




export const UnderConstruction = ({ name }) => {
  const { icon, iconSize, title, subtitle } = UNDER_CONSTRUCTION

  

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
      <Icon
        icon={icon}
        width={iconSize}
        height={iconSize}
        className="text-text-secondary animate-pulse"
      />
      <span className="rounded-full bg-neutral-100 px-3 py-1 text-body-sm text-text-secondary">
        Coming soon
      </span>
      <h1 className="text-heading-md text-text-primary">{title}</h1>
      {name && (
        <p className="text-body-sm text-text-secondary">{subtitle(name)}</p>
      )}
    </section>
  )
}
