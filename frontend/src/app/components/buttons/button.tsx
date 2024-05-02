import { ElevationClass } from '@/models/shared-models'
import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react'

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, ''> {
    children: ReactNode
    type?: 'button' | 'submit'
    className?: string
    variant?: 'tonal' | 'primary' | 'text' | 'outline' | 'unstyled'
    elevation?: ElevationClass
    disabled?: boolean
    onClick?: () => void
}
export default function Button({
    children,
    type = 'button',
    className,
    variant = 'tonal',
    elevation = 0,
    disabled = false,
    onClick,
}: ButtonProps) {
    const buttonVariant = useMemo(() => {
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
    }, [variant])

    return (
        <button
            data-testid='button'
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`button flex justify-center h-11 *:h-6 ${buttonVariant} ${ElevationClass[elevation]} ${className ? className : ''}`}
        >
            {children}
        </button>
    )
}
