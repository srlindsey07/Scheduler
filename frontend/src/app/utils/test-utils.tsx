import { render, RenderOptions } from '@testing-library/react'
import React, { JSXElementConstructor, ReactNode } from 'react'

// const AllTheProviders = ({ children }) => {
//     return (
//         <ThemeProvider theme='light'>
//             <TranslationProvider messages={defaultStrings}>
//                 {children}
//             </TranslationProvider>
//         </ThemeProvider>
//     )
// }

const customRender = (
    ui: ReactNode,
    providers?: JSXElementConstructor<{
        children:
            | React.ReactNode
            | React.ReactNode[]
            | React.ReactElement
            | React.ReactElement[]
    }>,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
