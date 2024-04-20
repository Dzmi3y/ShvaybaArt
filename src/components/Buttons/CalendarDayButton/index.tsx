import React, { ReactNode } from 'react'
import { Button, Content } from './styles'


type Props = {
    children: ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    isSelected?: boolean,
    isWeekend?: boolean
}


export const CalendarDayButton: React.FC<Props> = ({ children, onClick, disabled = false, isSelected = false, isWeekend = false }) => {
    return (
        <Button disabled={disabled} className={(isSelected ? "selected " : "") + (isWeekend ? "weekend" : "")} onClick={onClick}>
            <Content>
                {children}
            </Content>
        </Button>
    )
}
