import React, { useState } from 'react'
import { CloseButton, CloseImage, Container, EmailContainer, HeaderContainer, PhoneContainer, Subtitle, Title } from './styles'
import { BlueButton } from '../../../components/Buttons/BlueButton'
import { useTranslation } from 'react-i18next'
import { InputField } from '../../../components/InputField'

export const OrderConfirmation: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [isConfirmButtonDisabled] = useState<boolean>(true);
  const { t } = useTranslation(['global']);

  const confirmButtonClick = () => {

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
      <InputField inputType='tel' />
      </PhoneContainer>
      <EmailContainer>
        <InputField inputType='email'  />
      </EmailContainer>
      <BlueButton disabled={isConfirmButtonDisabled} onClick={confirmButtonClick}>{t("send", { ns: ['global'] })}</BlueButton>
    </Container>
  )
}
