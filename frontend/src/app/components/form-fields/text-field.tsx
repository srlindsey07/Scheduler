import { forwardRef, useMemo } from 'react'
import { RegisterOptions, useController } from 'react-hook-form'
import HintText from './hint-text'

interface TextFieldProps {
    name: string
    label: string
    control: any
    rules: RegisterOptions
    defaultValue?: string | number
    type?: 'text' | 'number' | 'email' | 'password'
    disabled?: boolean
    hintText?: string
}
// I don't think I need forwardRef anymore
const TextField = forwardRef(function TextField(
    {
        name,
        label,
        control,
        rules,
        defaultValue,
        type = 'text',
        disabled = false,
        hintText,
    }: TextFieldProps,
    ref,
) {
    const { field, fieldState, formState } = useController({
        name: name,
        control: control,
        rules: rules,
        defaultValue: defaultValue,
        disabled: disabled,
    })

    const hoverStyles = useMemo(() => {
        return !!fieldState.error
            ? 'peer-hover:border-red-700'
            : 'peer-hover:border-slate-600'
    }, [fieldState.error])

    const focusStyles = useMemo(() => {
        return !!fieldState.error
            ? 'peer-focus:border-red-500'
            : 'peer-focus:border-primary'
    }, [fieldState.error])

    return (
        <div
            className={`relative mb-5 mt-3 flex flex-col ${disabled ? 'opacity-50' : ''}`}
        >
            <label
                htmlFor={name}
                className={`absolute -top-2.5 left-4 text-sm z-[1]`}
            >
                {label} {!!rules.required && <sup>*</sup>}
            </label>

            <div className='group relative'>
                <input
                    id={name}
                    type={type}
                    className='w-full outline-none px-4 py-3 cursor-pointer peer disabled:pointer-events-none disabled:bg-slate-100'
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    disabled={disabled}
                    aria-required={!!rules.required}
                    aria-describedby={`${name}-hint`}
                    aria-invalid={!!fieldState.error}
                />

                <fieldset
                    aria-hidden='true'
                    className={`absolute inset-0 -top-2.5 px-2.5 text-sm border rounded  ${!!fieldState.error ? 'border-red-500' : 'border-slate-400'}
                        pointer-events-none ${hoverStyles} ${focusStyles} peer-focus:border-2 ${disabled ? 'border-dotted' : undefined}`}
                >
                    <legend
                        className={`px-1.5 invisible ${!!rules.required ? 'pr-2.5' : undefined}`}
                    >
                        {label}
                    </legend>
                </fieldset>
            </div>

            {hintText && !fieldState.error && (
                <HintText
                    id={`${name}-hint`}
                    message={hintText}
                />
            )}

            {fieldState.error?.message && (
                <HintText
                    id={`${name}-hint`}
                    message={fieldState.error?.message}
                    error={true}
                />
            )}
        </div>
    )
})

export default TextField
