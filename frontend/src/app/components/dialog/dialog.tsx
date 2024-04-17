import { DialogProps } from '@/app/models/dialog-models'
import { useCallback, useEffect, useMemo, useRef } from 'react'

export default function Dialog({ open, onClose, children }: DialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const onClick = useCallback(
        ({ target }: { target: any }) => {
            if (target === dialogRef.current) {
                onClose()
            }
        },
        [onClose],
    )

    // when the open prop changes to true, show dialog
    useEffect(() => {
        if (open) {
            dialogRef.current?.showModal()
        }
    }, [open])

    // when closing animation ends, close the dialog
    const onAnimationEnd = useCallback(() => {
        if (!open) dialogRef.current?.close()
    }, [open])

    const dialogClasses = useMemo(() => {
        const classes = [
            'backdrop:bg-smoke-300',
            'rounded-xl',
            'animate-fade-in',
            'w-full',
            'max-w-md',
        ]
        if (!open) {
            classes.push('animate-fade-out')
        }
        return classes.join(' ')
    }, [open])

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onClick={onClick}
            className={dialogClasses}
            onAnimationEnd={onAnimationEnd}
        >
            <div
                ref={containerRef}
                className='dialog-container p'
            >
                {children}
            </div>
        </dialog>
    )
}
