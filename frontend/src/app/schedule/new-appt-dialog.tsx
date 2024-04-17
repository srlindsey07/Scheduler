import { useForm } from 'react-hook-form'
import Button from '../components/buttons/button'
import Dialog from '../components/dialog/dialog'
import DialogFooter from '../components/dialog/dialog-footer'
import DialogFooterActions from '../components/dialog/dialog-footer-actions'
import DialogHeader from '../components/dialog/dialog-header'
import TextField from '../components/form-fields/text-field'
import { DialogComponentProps } from '../models/dialog-models'

export default function NewAppointmentDialog({
    open,
    onClose,
}: DialogComponentProps) {
    interface NewAppointmentForm {
        firstName: string
        lastName: string
        email: string
    }

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<NewAppointmentForm>({
        mode: 'onBlur',
        defaultValues: {
            firstName: 'First',
            lastName: '',
            email: '',
        },
    })
    const onSubmit = (data: any) => {
        console.log(data)
    }
    const onError = (error: any) => {
        console.log(error)
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogHeader title='Test Dialog Header' />

            <form className='flex flex-col'>
                <TextField
                    name='firstName'
                    label='First Name'
                    control={control}
                    rules={{
                        required: 'This is required',
                        maxLength: { value: 2, message: 'Max length exceeded' },
                    }}
                />

                <TextField
                    name='lastName'
                    label='Last Name'
                    control={control}
                    rules={{
                        required: "I'm required",
                    }}
                    disabled={true}
                />

                <TextField
                    name='email'
                    label='Email'
                    control={control}
                    rules={{ required: "I'm required too" }}
                />
            </form>

            <DialogFooter>
                <DialogFooterActions>
                    <Button
                        variant='text'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant='text'
                        form='addForm'
                        onClick={handleSubmit(onSubmit, onError)}
                    >
                        Submit
                    </Button>
                </DialogFooterActions>
            </DialogFooter>
        </Dialog>
    )
}
