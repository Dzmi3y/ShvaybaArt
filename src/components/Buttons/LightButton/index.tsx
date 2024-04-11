import React, { ReactNode } from 'react'
import { Button } from './styles'


type Props = {
    children: ReactNode,
    onClick: () => void,
    disabled?: boolean,
}


export const LightButton: React.FC<Props> = ({ children, onClick, disabled = false }) => {
    return (
        <Button disabled={disabled} onClick={onClick}>{children}</Button>
    )
}
