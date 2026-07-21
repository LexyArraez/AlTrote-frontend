export function Checkbox({ checked, onChange, id, children, required = false }) {
  const inputId = id || 'checkbox'

  return (
    <label htmlFor={inputId} className="flex items-start gap-2 cursor-pointer">
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required={required}
        className="mt-0.5 w-4 h-4 rounded border-neutral-lighter text-primary
                   focus:ring-primary focus:ring-offset-0 shrink-0"
      />
      <span className="text-sm text-neutral-light leading-snug">{children}</span>
    </label>
  )
}