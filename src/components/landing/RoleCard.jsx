import { Button } from '../common/Button'


export const RoleCard = ({ icon, label, selected, onClick }) => {
    return (
         <Button
      variant="role"
      onClick={onClick}
      role="radio"
      aria-checked={selected}
      className={selected ? 'border-primary bg-primary/10' : ''}
    >
      <div
        aria-hidden="true"
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          selected ? 'bg-primary text-white' : 'bg-cream text-neutral-light'
        }`}
      >
        {icon}
      </div>
      <div className={`text-sm font-medium ${selected ? 'text-primary' : 'text-neutral'}`}>
        {label}
      </div>
    </Button>
    )
}
