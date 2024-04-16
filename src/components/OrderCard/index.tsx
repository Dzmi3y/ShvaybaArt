import React, { useEffect, useState } from 'react'
import {
    AngleArrow, CheckBox, CloseImage, Container, ControlsContainer, ExhibitionContainer,
    ExhibitionDate, ExhibitionDateContainer, ExhibitionPrice, ExhibitionPriceContainer, ExhibitionText,
    GraphicContainer, GraphicDescription, GraphicPrice, ImageContainer, InfoContainer, StyledImage, Title, Type, CheckBoxLabel
} from './styles'
import { Exhibition } from '../../core/types/Exhibition'
import { PictureInfo } from '../../core/types/PictureInfo'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../core/hooks'
import LangEnum from '../../core/enums/LangEnum'
import { removeItemFromCart } from '../../core/store/reducers/CartReducer'

export type OrterCardProps = {
    orderItem: Exhibition | PictureInfo,
    changeSelectedItem: (isSelected: boolean, cartItem: Exhibition | PictureInfo) => void
}

export const OrderCard: React.FC<OrterCardProps> = ({ orderItem, changeSelectedItem }) => {
    const [selectedExhibitionDate, setSelectedExhibitionDate] = useState<string>("");
    const [selectedExhibitionPriceId, setSelectedExhibitionPriceId] = useState<string>("");
    const [exhibitionDateOpen, setExhibitionDateOpen] = useState<boolean>(false);
    const [exhibitionPriceOpen, setExhibitionPriceOpen] = useState<boolean>(false);
    const { t } = useTranslation(['global']);
    const globalReducer = useAppSelector(state => state.globalReducer);
    const dispatch = useAppDispatch();

    const isMobile: boolean = window.innerWidth < 1458;
    const exhibition = orderItem as Exhibition;
    const picture = orderItem as PictureInfo;

    const isExhibition = "addressId" in orderItem;
    const title = isExhibition ? "exhibition" : "graphic";
    const imageUrl = isExhibition ? exhibition.image : picture.imageUrl;

    const remove = () => {
        changeSelectedItem(false, orderItem);
        dispatch(removeItemFromCart(orderItem.cartId));
    }

    const getExhibitionPriceById = (priseId: string): string => {
        const selectedPrice = exhibition.prices.find((p) => p.id === priseId);
        let priceType = globalReducer.Lang === LangEnum.EN ? selectedPrice?.type : selectedPrice?.typeRu;
        priceType = isMobile ? priceType?.substring(0, 2) : priceType;
        return `${priceType} ${selectedPrice?.price}$`;
    }

    const exhibitionDateWindowToggle = (isOpen: boolean) => {
        setExhibitionDateOpen(isOpen)
    }

    const exhibitionPriceWindowToggle = (isOpen: boolean) => {
        setExhibitionPriceOpen(isOpen);
    }

    useEffect(() => {
        if ("addressId" in orderItem) {
            setSelectedExhibitionDate((orderItem as Exhibition).from)
            setSelectedExhibitionPriceId((orderItem as Exhibition).selectedPriceId)
        }
    }, [orderItem])

    return (<Container>
        <ImageContainer>
            <StyledImage src={imageUrl} />
            {isExhibition && (<ExhibitionText>{t("exhibition", { ns: ['global'] })}</ExhibitionText>)}
        </ImageContainer>
        <InfoContainer>
            <Type>{t(title, { ns: ['global'] })}</Type>
            <Title>{orderItem.title}</Title>
            {isExhibition
                ? (<ExhibitionContainer>
                    <ExhibitionDateContainer>
                        <ExhibitionDate>{selectedExhibitionDate}</ExhibitionDate>
                        <AngleArrow className={exhibitionDateOpen ? "open" : ""} onClick={() => exhibitionDateWindowToggle(!exhibitionDateOpen)} />
                    </ExhibitionDateContainer>
                    <ExhibitionPriceContainer>
                        <ExhibitionPrice>{getExhibitionPriceById(selectedExhibitionPriceId)}</ExhibitionPrice>
                        <AngleArrow className={exhibitionPriceOpen ? "open" : ""} onClick={() => exhibitionPriceWindowToggle(!exhibitionPriceOpen)} />
                    </ExhibitionPriceContainer>
                </ExhibitionContainer>)
                : (<GraphicContainer>
                    <GraphicDescription>{globalReducer.Lang === LangEnum.EN ? picture.description : picture.descriptionRu}</GraphicDescription>
                    <GraphicPrice>{picture.price}$</GraphicPrice>
                </GraphicContainer>)}
        </InfoContainer>
        <ControlsContainer>
            <CheckBoxLabel><CheckBox onChange={(e) => changeSelectedItem(e.target.checked, orderItem)} type="checkbox" /><span></span></CheckBoxLabel>
            <CloseImage onClick={remove} />
        </ControlsContainer>
    </Container>
    )
}
