import { RenderResult, screen } from '@testing-library/react'
import { createElement } from 'react'
import { render } from 'test-utils'
import Button from '../button'
import ButtonGroup, { ButtonGroupProps } from '../button-group'

describe('ButtonGroup', () => {
    it('should render render with provided label and default values', () => {
        const props: ButtonGroupProps = {
            children: [
                createElement(Button, null, <span>button1</span>),
                createElement(Button, null, <span>button2</span>),
            ],
        }

        createButtonGroup(props)
        const buttonGroup: HTMLElement = screen.getByTestId('button-group')
        const children = screen.getAllByTestId('button')

        expect(buttonGroup).toBeInTheDocument()
        expect(buttonGroup).not.toHaveAccessibleDescription()
        expect(children.length).toBe(2)
        expect(children[0]).toHaveClass('shadow-none')
        expect(children[1]).toHaveClass('shadow-none')
    })

    it('should render with aria-label if label is provided', () => {
        const props: ButtonGroupProps = {
            label: 'test label',
            children: [
                createElement(Button, null, <span>button1</span>),
                createElement(Button, null, <span>button2</span>),
            ],
        }
        createButtonGroup(props)
        const buttonGroup: HTMLElement = screen.getByTestId('button-group')

        console.log(buttonGroup)

        expect(buttonGroup).toHaveAccessibleDescription(props.label)
    })
})

const createButtonGroup = (props: ButtonGroupProps): RenderResult => {
    return render(
        <ButtonGroup
            label={props.label}
            className={props.className}
            variant={props.variant}
            elevation={props.elevation}
        >
            {props.children}
        </ButtonGroup>,
    )
}
