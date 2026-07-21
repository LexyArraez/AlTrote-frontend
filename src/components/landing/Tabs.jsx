
export const Tabs = ({ activeTab, onChange, options }) => {
    return (

        <div role="tablist" className="flex bg-cream rounded-full p-1 gap-1">
            {options.map((option) => {

                const isActive = activeTab === option.value

                return (
                    <button
                        key={option.value}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`panel-${option.value}`}
                        onClick={() => onChange(option.value)}
                        className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors ${isActive
                            ? 'bg-white text-primary shadow-sm'
                            : 'text-primary-light hover:text-primary-dark'
                            }`}
                    >
                        {option.label}
                    </button>
                )
            })}
        </div>

    )
}
