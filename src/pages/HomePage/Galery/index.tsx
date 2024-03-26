import { useTranslation } from "react-i18next";
import { ButtonWrapper, Container, Title } from "./styles";
import { ShortGallery } from "../../../components/ShortGallery";
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { BorderedButton, SizeEnum } from "../../../components/Buttons/BorderedButton";
import { useNavigate } from "react-router-dom";
import GalleryImg_1 from "../../../assets/images/home/Gallery_1.png";
import GalleryImg_2 from "../../../assets/images/home/Gallery_2.png";
import GalleryImg_3 from "../../../assets/images/home/Gallery_3.png";

export const Galery = () => {
  const { t } = useTranslation(['home', 'global']);
  const navigate = useNavigate();

  const learnMoreButtonClick = () => {
    navigate(RouteNamesEnum.GALERY);
  }

  return (
    <Container>
      <Title>{t("gallery_title", { ns: ['home'] })}</Title>
      <ShortGallery imgList={[GalleryImg_1, GalleryImg_2, GalleryImg_3]} />
      <ButtonWrapper>
        <BorderedButton size={SizeEnum.Medium} onClick={learnMoreButtonClick}>
          {t("button_learn_more", { ns: ['global'] })}
        </BorderedButton>
      </ButtonWrapper>
    </Container>
  )
}
