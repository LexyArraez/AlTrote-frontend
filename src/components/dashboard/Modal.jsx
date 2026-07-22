import { Icon } from '@iconify/react'


export const Modal = ({ open, onClose, title, children }) => {
    if (!open) return null

    return (
        <div
            className="fixed inset-0 bg-neutral/40 flex items-center justify-center p-4 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md bg-white rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 id="modal-title" className="text-lg font-bold text-neutral">
                        {title}
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar"
                        className="text-neutral-light hover:text-neutral"
                    >
                        <Icon icon="mdi:close" width="22" height="22" />
                    </button>
                </div>

                {children}
            </div>
        </div>
    )
}
