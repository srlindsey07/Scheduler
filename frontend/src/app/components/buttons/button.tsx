import { ElevationClass } from '@/app/models/shared-models'
import { ReactNode } from 'react'

export default function Button({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className,
    variant = 'tonal',
    elevation = 0,
}: {
    children: ReactNode
    onClick?: () => void
    type?: 'submit' | 'reset' | 'button'
    disabled?: boolean
    className?: string
    variant?: 'tonal' | 'primary' | 'text' | 'outline' | 'unstyled'
    elevation?: ElevationClass
}) {
    const applyButtonVariant = (): string => {
        switch (variant) {
            case 'tonal':
                return 'button-tonal'

            case 'primary':
                return 'button-primary'

            case 'text':
                return 'button-text'

            case 'outline':
                return 'button-outline'

            default:
                return 'button-unstyled'
        }
    }

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`button flex justify-center h-11 *:h-full ${applyButtonVariant()} ${ElevationClass[elevation]} ${className ? className : ''}`}
        >
            {children}
        </button>
    )
}
