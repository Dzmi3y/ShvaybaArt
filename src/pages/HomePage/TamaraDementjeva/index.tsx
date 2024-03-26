import { useTranslation } from "react-i18next";
import { ButtonWrapper, Container, Description, Title } from "./styles";
import { useNavigate } from 'react-router-dom';
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { BorderedButton, SizeEnum } from "../../../components/Buttons/BorderedButton";
import Tam_Dem_1 from "../../../assets/images/home/Tam_Dem_1.png";
import Tam_Dem_2 from "../../../assets/images/home/Tam_Dem_2.png";
import Tam_Dem_3 from "../../../assets/images/home/Tam_Dem_3.png";
import { ShortGallery } from "../../../components/ShortGallery";

export const TamaraDementjeva = () => {
  const { t } = useTranslation(['home', 'global']);
  const navigate = useNavigate();

  const learnMoreButtonClick = () => {
    navigate(RouteNamesEnum.TAMARA_DEMENTJEVA);
  }
  return (
    <Container>
      <Title>{t("tamara_dementjeva_title", { ns: ['home'] })}</Title>
      <Description>{t("tamara_dementjeva_description", { ns: ['home'] })}</Description>
      <ShortGallery invert imgList={[Tam_Dem_1, Tam_Dem_2, Tam_Dem_3]} />
      <ButtonWrapper>
        <BorderedButton size={SizeEnum.Medium} onClick={learnMoreButtonClick}>
          {t("button_learn_more", { ns: ['global'] })}
        </BorderedButton>
      </ButtonWrapper>
    </Container>
  )
}
