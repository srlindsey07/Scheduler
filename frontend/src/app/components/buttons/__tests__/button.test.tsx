import {
    fireEvent,
    RenderResult,
    screen,
    waitFor,
} from '@testing-library/react'
import { render } from 'test-utils'
import Button, { ButtonProps } from '../button'

describe('Button', () => {
    it('should render with correct children, type, disabled property and defaults', () => {
        const className = 'test-class'
        const props: ButtonProps = {
            children: 'Test child',
            className: className,
        }

        createButton(props)
        const button = screen.getByTestId('button')

        expect(button).toBeInTheDocument()
        expect(button.getAttribute('type')).toEqual('button')
        expect(button).not.toBeDisabled()
        expect(button.textContent).toContain(props.children)
        expect(button).toHaveClass('button-tonal')
        expect(button).toHaveClass('shadow-none')
        expect(button).toHaveClass(className)
    })

    it('should call provided onClick method when clicked', async () => {
        const onClick = jest.fn()
        const props: ButtonProps = {
            children: 'Test child',
            onClick: onClick,
        }
        createButton(props)
        const button = screen.getByTestId('button')
        fireEvent.click(button)

        await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
    })

    it("should have class 'button-primary' if variant is primary", () => {
        const props: ButtonProps = {
            children: 'Test child',
            variant: 'primary',
        }

        createButton(props)
        const button = screen.getByTestId('button')

        expect(button).toHaveClass('button-primary')
    })
})

const createButton = (props: ButtonProps): RenderResult => {
    return render(
        <Button
            type={props.type}
            disabled={props.disabled}
            onClick={() => (props.onClick ? props.onClick() : undefined)}
            className={props.className}
            variant={props.variant}
            elevation={props.elevation}
        >
            {props.children}
        </Button>,
    )
}
