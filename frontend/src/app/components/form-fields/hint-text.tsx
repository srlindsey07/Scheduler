interface HintTextProps {
    message: string | undefined
    id: string
    error?: boolean
}
export default function HintText({
    message,
    id,
    error = false,
}: HintTextProps) {
    if (!message) return

    return (
        <span
            id={id}
            className={`pl-4 text-sm ${error && 'text-red-500'}`}
            role={error ? 'alert' : undefined}
        >
            {message}
        </span>
    )
}
