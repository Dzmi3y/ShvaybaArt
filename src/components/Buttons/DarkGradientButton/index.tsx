import React, { ReactNode, useRef } from 'react'
import { Button } from './styles';

type Props = {
    children: ReactNode,
    onClick: () => void,
    disabled?: boolean
}

export const DarkGradientButton: React.FC<Props> = ({ children, onClick, disabled = false }) => {

    
    return (<Button className={disabled ? 'disabled' : ''} onClick={disabled ? () => { } : onClick}>
        {children}
    </Button>
    )
}
