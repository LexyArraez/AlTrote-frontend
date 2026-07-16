import { useState } from 'react'
import { Icon } from '@iconify/react'

export const Input = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    id,
    required = false,
}) => {
    
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'
    const inputType = isPassword && showPassword ? 'text' : type
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
        <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm mb-1 text-neutral">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-3 rounded-xl border border-neutral-lighter bg-white
                     text-neutral placeholder:text-neutral-light
                     focus:outline-none focus:border-primary"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-light"
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            <Icon icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} width="18" height="18" />
          </button>
        )}
      </div>
    </div>
    )
}
