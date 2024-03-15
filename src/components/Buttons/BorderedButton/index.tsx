import React, { ReactNode } from 'react'
import { Button } from './styles';

type Props={
    children: ReactNode, 
    onClick: () => void, 
    disabled?: boolean,
    isRedButton?:boolean,
    size?: SizeEnum 
}

export enum SizeEnum{
    Small = "small",
    Medium = "medium",
    Large = "large"
}


export const BorderedButton: React.FC<Props> = ({ children, onClick, disabled = false, isRedButton = false,size =SizeEnum.Small }) => {

    let buttonClasses= disabled ? 'disabled' : '';
    buttonClasses += isRedButton ? ' red' : '';
    buttonClasses += " "+size;

    return (<Button className={buttonClasses} onClick={disabled ? () => { } : onClick}>
        {children}
    </Button>
    )
}
