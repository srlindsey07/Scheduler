'use client'
import { cloneElement, ReactElement } from 'react'

export default function NavigationAction({
    icon,
    value,
    showLabel = true,
    onClick = () => null,
    label,
    isActive = false,
    disabled = false,
}: {
    icon: ReactElement
    value: string
    showLabel?: boolean
    onClick?: (e: string) => void
    label?: string
    isActive?: boolean
    disabled?: boolean
}) {
    const activeStyling: string = 'bg-primary-600'

    return (
        <button
            type='button'
            onClick={() => onClick(value)}
            className={`group flex flex-col items-center mb-5 focus:outline-none disabled:opacity-50 disabled:pointer-events-none`}
            aria-current={isActive ? 'page' : false}
            disabled={disabled}
        >
            <span
                className={`py-1.5 min-w-14 rounded-full bg-primary-800 bg-transition group-hover:bg-primary-700 group-focus:bg-primary-600 ${isActive ? activeStyling : ''}`}
            >
                {cloneElement(icon, { className: 'h-6' })}
            </span>

            {showLabel && (
                <span className='text-sm font-medium mt-1'>{label}</span>
            )}
        </button>
    )
}
