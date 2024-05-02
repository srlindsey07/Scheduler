import { fireEvent, screen, waitFor } from '@testing-library/react'
import { render, RenderResult } from 'test-utils'
import Button, { ButtonProps } from '../button'

describe('Button', () => {
    it('should render with correct children, type and disabled property', () => {
        const props: ButtonProps = {
            children: 'Test child',
            className: 'test-class',
        }
        createButton(props)
        const button = screen.getByTestId('button')

        expect(button).toBeTruthy()
        expect(button.getAttribute('type')).toEqual('button')
        expect(button.disabled).toBe(false)
        expect(button.textContent).toContain(props.children)
        expect(button.classList).toContain('button-tonal')
        expect(button.classList).toContain('shadow-none')
        expect(button.classList).toContain(props.className)
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

        expect(button.classList).toContain('button-primary')
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
