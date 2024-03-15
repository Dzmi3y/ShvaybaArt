import { Container, Description, Name, Title } from './styles'
import { useTranslation } from "react-i18next";
import { DarkGradientButton } from '../../../components/Buttons/DarkGradientButton';
import { useNavigate } from 'react-router-dom';
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';

export const Exhibition = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(['home','global']);
    const exhibitionButtonClick = () => {
        navigate(RouteNamesEnum.EXHIBITIONS);
    }
    return (<Container>
        <Title>{t("exhibition_title", { ns: ['home'] })}</Title>
        <Name>{t("exhibition_name", { ns: ['home'] })}</Name>
        <Description>{t("exhibition_description", { ns: ['home'] })}</Description>
        <DarkGradientButton onClick={exhibitionButtonClick} >
            {t("button_learn_more", { ns: ['global'] })}
        </DarkGradientButton>
    </Container>

    )
}
