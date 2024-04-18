import React, {useState } from 'react'
import { CloseButton, CloseImage, Container, EmailContainer, HeaderContainer, PhoneContainer, Subtitle, Title } from './styles'
import { BlueButton } from '../../../components/Buttons/BlueButton'
import { useTranslation } from 'react-i18next'
import { InputField } from '../../../components/InputField'

export const OrderConfirmation: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [isConfirmButtonDisabled, setIsConfirmButtonDisabled] = useState<boolean>(true);
  const [fieldValidationList, setFieldValidationList] = useState<{ name: string, isValid: boolean }[]>([]);
  const { t } = useTranslation(['global']);

  const send = () => {

  }

  const validationInfo = (name: string, isValid: boolean) => {

    let validationItem = fieldValidationList.find((f) => f.name === name);

    if (validationItem) {
      if (validationItem.isValid !== isValid) {

        validationItem.isValid = isValid;

        const areAllFieldsInvalid: boolean = !!fieldValidationList.find(f => !f.isValid)

        if (areAllFieldsInvalid !== isConfirmButtonDisabled && fieldValidationList.length === 2) {

          setIsConfirmButtonDisabled(areAllFieldsInvalid);
        }
      }
    }
    else {
      if (!validationItem) {
        const validationList = [...fieldValidationList, { name, isValid }];
        setFieldValidationList(validationList);
        if (isValid) {
          const areAllFieldsInvalid: boolean = !!fieldValidationList.find(f => !f.isValid)
          if (areAllFieldsInvalid !== isConfirmButtonDisabled && fieldValidationList.length === 1) {

            setIsConfirmButtonDisabled(areAllFieldsInvalid);
          }
        }

      }
    }

  }

  return (
    <Container>
      <HeaderContainer>
        <CloseButton onClick={closeModal}>
          <CloseImage />
        </CloseButton>
      </HeaderContainer>
      <Title>{t("confirmOrderTitle", { ns: ['global'] })}</Title>
      <Subtitle>{t("confirmOrderSubtitle", { ns: ['global'] })}</Subtitle>
      <PhoneContainer>
        <InputField validationInfo={validationInfo} inputType='tel' />
      </PhoneContainer>
      <EmailContainer>
        <InputField validationInfo={validationInfo} inputType='email' />
      </EmailContainer>
      <BlueButton disabled={isConfirmButtonDisabled} onClick={send}>{t("send", { ns: ['global'] })}</BlueButton>
    </Container>
  )
}
