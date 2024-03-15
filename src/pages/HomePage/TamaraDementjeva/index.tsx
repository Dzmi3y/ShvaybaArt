import { useTranslation } from "react-i18next";
import { Container, Description, Title } from "./styles";
import { useNavigate } from 'react-router-dom';
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { BorderedButton, SizeEnum } from "../../../components/Buttons/BorderedButton";

export const TamaraDementjeva = () => {
    const { t } = useTranslation(['home','global']);
    const navigate = useNavigate();

    const learnMoreButtonClick = () => {
        navigate(RouteNamesEnum.TAMARA_DEMENTJEVA);
    }
  return (
    <Container>
        <Title>{t("tamara_dementjeva_title", { ns: ['home'] })}</Title>
        <Description>{t("tamara_dementjeva_description", { ns: ['home'] })}</Description>
        <BorderedButton size={SizeEnum.Medium} onClick={learnMoreButtonClick}>
            {t("button_learn_more", { ns: ['global'] })}
        </BorderedButton>
    </Container>
  )
}
