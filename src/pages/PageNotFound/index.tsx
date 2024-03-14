import { useTranslation } from "react-i18next";
import { Container, Message, StyledImg, Title } from "./styles";
import Image404 from "../../assets/images/404image.png";


export const PageNotFound = () => {
  const { t } = useTranslation(['global']);

  return (
    <Container>
      <Title>{t("title", {ns: ['page404']})} </Title>
      <Message>{t("message", {ns: ['page404']})} </Message>
      <StyledImg src={Image404} alt="404 image"/>
    </Container>
    
  )
}
