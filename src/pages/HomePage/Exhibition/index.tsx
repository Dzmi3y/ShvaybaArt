import { Container, Description, Name, Title } from './styles'
import { useTranslation } from "react-i18next";
import { DarkGradientButton } from '../../../components/Buttons/DarkGradientButton';
import { createSearchParams, useNavigate } from 'react-router-dom';
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';

export const Exhibition = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(['home','global']);
    const exhibitionButtonClick = () => {
        navigate({ pathname: RouteNamesEnum.DETAILED_EXHIBITION_PAGE, search: createSearchParams({ name: t("exhibition_name", { ns: ['home'], lng:"en" })}).toString() })
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
