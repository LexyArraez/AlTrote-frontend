
export const Select = ({ label, value, onChange, id, required = false, children }) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={selectId} className="block text-sm mb-1 text-neutral">
                    {label}
                </label>
            )}
            <select
                id={selectId}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 rounded-xl border border-neutral-lighter bg-white
                   text-neutral focus:outline-none focus:border-primary"
            >
                {children}
            </select>
        </div>
    )
}
