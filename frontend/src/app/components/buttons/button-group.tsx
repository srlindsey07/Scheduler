import { ElevationClass } from '@/app/models/shared-models'
import { Children, cloneElement, ReactElement } from 'react'

export default function ButtonGroup({
    children,
    label,
    className = '',
    variant = 'tonal',
    elevation = 0,
}: {
    children: ReactElement[]
    label?: string
    className?: string
    variant?: 'tonal' | 'primary' | 'text' | 'outline'
    elevation?: ElevationClass
}) {
    const styledChildren = Children.map(children, (child) => {
        return cloneElement(child, {
            className:
                'shadow-none rounded-none first:rounded-l-full first:border-r-0 last:rounded-r-full last:border-l-0',
            variant: variant,
        })
    })

    return (
        <div
            role='group'
            aria-label={!!label ? label : ''}
            className={`button-group flex flex-row rounded-full ${ElevationClass[elevation]} ${className}`}
        >
            {styledChildren}
        </div>
    )
}
