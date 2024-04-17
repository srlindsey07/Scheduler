import { ElevationClass } from '@/app/models/shared-models'
import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react'

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, ''> {
    children: ReactNode
    type?: 'button' | 'submit'
    className?: string
    variant?: 'tonal' | 'primary' | 'text' | 'outline' | 'unstyled'
    elevation?: ElevationClass
}
export default function Button({
    children,
    type = 'button',
    className,
    variant = 'tonal',
    elevation = 0,
    ...props
}: ButtonProps) {
    const { onClick, disabled } = props
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
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`button flex justify-center h-11 *:h-6 ${buttonVariant} ${ElevationClass[elevation]} ${className ? className : ''}`}
        >
            {children}
        </button>
    )
}
