import React from 'react'
import { Container, InfoContainer, InfoImage, InfoText, StyledInput, Label } from './styled'
import { useTranslation } from 'react-i18next';

export const InputField: React.FC<{ inputType: React.HTMLInputTypeAttribute }> = ({ inputType }) => {
    const { t } = useTranslation(['global']);

    const getPattern = (): string => {
        switch (inputType) {
            case "email":
                return ".*@.*\..*"

            case "tel":
                return "\\+[0-9]{1,3}\\s[0-9]{2}\\s[0-9]{3}\\s[0-9]{2}\\s[0-9]{2}"

            default:
                return "";
        }
    }


    return (
        <Container>
            <Label htmlFor={inputType}>{t(inputType, { ns: ['global'] })}</Label>
            <StyledInput id={inputType} type={inputType} pattern={getPattern()} title="" />
            <InfoContainer>
                <InfoImage />
                <InfoText></InfoText>
            </InfoContainer>
        </Container>
    )
}