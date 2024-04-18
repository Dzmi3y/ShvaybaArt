import React, {useRef, useState } from 'react'
import { Container, InfoContainer, InfoImage, StyledInput, Label, IncorrectInfoText, CorrectInfoText } from './styled'
import { useTranslation } from 'react-i18next';

export type InputFieldProps = {
    inputType: React.HTMLInputTypeAttribute,
    validationInfo: (name: string, isValid: boolean) => void
}

export const InputField: React.FC<InputFieldProps> = ({ inputType, validationInfo }) => {
    const { t } = useTranslation(['global']);
    const [isDefaultValue, setIsDefaultValue] = useState<boolean>(true);

    const getPattern = (): string => {
        switch (inputType) {
            case "email":
                return ".*@.*\\..*"

            case "tel":
                return "\\+[0-9]{1,3}\\s[0-9]{2}\\s[0-9]{3}\\s[0-9]{2}\\s[0-9]{2}"

            default:
                return "";
        }
    }

    const getIncorrectText = (): string => {
        switch (inputType) {
            case "email":
                return "incorrectEmail"

            case "tel":
                return "incorrectNumber"

            default:
                return "";
        }
    }
    const inputEl = useRef<HTMLInputElement>(null);


    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDefaultValue(false);
        if (inputEl.current) {
            validationInfo(inputType, inputEl.current.validity.valid);
        }
    }

    const reverseString = (s: string): string => {
        const splitString = s.split("");
        const reversArray = splitString.reverse();
        return reversArray.join("");
    }

    const formatNumber = (phoneNumber: number | string) => {
        const phoneNumberString = phoneNumber.toLocaleString('en-US', {
            style: 'decimal',
            minimumIntegerDigits: 1,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });

        const reversedPhoneNumber = reverseString(phoneNumberString.replace(/[^\d]/g, '').slice(0, 12));
        const formatedReversePhoneNumber = `${reversedPhoneNumber.slice(0, 2)}  ${reversedPhoneNumber.slice(2, 4)} ${reversedPhoneNumber.slice(4, 7)} ${reversedPhoneNumber.slice(7, 9)}  ${reversedPhoneNumber.slice(9, 12)}`

        return "+" + reverseString(formatedReversePhoneNumber.replace(/\s+/g, ' ').trim());
    }

    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if (inputType === "tel") {
            e.currentTarget.value = formatNumber(e.currentTarget.value);
        }
    }


    return (
        <Container>
            <Label htmlFor={inputType}>{t(inputType, { ns: ['global'] })}</Label>
            <StyledInput ref={inputEl} className={isDefaultValue ? "default" : ""}
                required={!isDefaultValue} onChange={inputChange}
                id={inputType}
                type={inputType}
                pattern={getPattern()}
                onInput={inputHandler}
                title="" />
            {(!isDefaultValue) && (<InfoContainer>
                <InfoImage />
                <IncorrectInfoText className='incorrectInfo'>{t(getIncorrectText(), { ns: ['global'] })}</IncorrectInfoText>
                <CorrectInfoText className='correctInfo'>{t("correct", { ns: ['global'] })}</CorrectInfoText>
            </InfoContainer>)}
        </Container>
    )
}