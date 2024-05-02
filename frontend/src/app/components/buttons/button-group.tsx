import { ElevationClass } from '@/models/shared-models'
import { Children, cloneElement, ReactElement } from 'react'

export interface ButtonGroupProps {
    children: ReactElement[]
    label?: string
    className?: string
    variant?: 'tonal' | 'primary' | 'text' | 'outline'
    elevation?: ElevationClass
}
export default function ButtonGroup({
    children,
    label,
    className = '',
    variant = 'tonal',
    elevation = 0,
}: ButtonGroupProps) {
    const styledChildren = Children.map(children, (child) => {
        return cloneElement(child, {
            className:
                'shadow-none rounded-none first:rounded-l-full first:border-r-0 last:rounded-r-full last:border-l-0',
            variant: variant,
        })
    })

    return (
        <div
            data-testid='button-group'
            role='group'
            title={!!label ? label : ''}
            className={`button-group flex flex-row rounded-full ${ElevationClass[elevation]} ${className}`}
        >
            {styledChildren}
        </div>
    )
}
