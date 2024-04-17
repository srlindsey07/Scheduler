interface HintTextProps {
    message: string
    id: string
    error?: boolean
}
export default function HintText({
    message,
    id,
    error = false,
}: HintTextProps) {
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
