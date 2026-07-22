import { Form } from "react-router-dom"
import {SIZES ,getInitials} from '../../../constants/navBar'

export function Avatar({ src, name = '', size = 'md', className = '' }) {
  
  const sizeClasses = SIZES[size] || SIZES.md
  const baseClasses = `${sizeClasses} rounded-full ${className}`.trim()

  if (src) {
    return (
      <img
        src={src}
        alt={name || 'Avatar'}
        className={`${baseClasses} object-cover`}
      />
    )
  }

  return (
    <div className={`${baseClasses} shrink-0 aspect-square rounded-full bg-secondary/30 text-secondary-dark
              flex items-center justify-center font-semibold ${className}`}>
      {getInitials(name)}
    </div>
  )
}