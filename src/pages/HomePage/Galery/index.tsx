import { useTranslation } from "react-i18next";
import { Container, Title } from "./styles";
import { ShortGallery } from "../../../components/ShortGallery";
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { BorderedButton, SizeEnum } from "../../../components/Buttons/BorderedButton";
import { useNavigate } from "react-router-dom";

export const Galery = () => {
    const { t } = useTranslation(['home','global']);
    const navigate = useNavigate();

    const learnMoreButtonClick = () => {
        navigate(RouteNamesEnum.GALERY);
    }

  return (
    <Container>
        <Title>{t("gallery_title", { ns: ['home'] })}</Title>
        <ShortGallery/>
        <BorderedButton size={SizeEnum.Medium} onClick={learnMoreButtonClick}>
            {t("button_learn_more", { ns: ['global'] })}
        </BorderedButton>
    </Container>
  )
}
