import React, { useEffect, useRef, useState } from 'react'
import {
    AngleArrow, CheckBox, CloseImage, Container, ControlsContainer, ExhibitionContainer,
    ExhibitionDate, ExhibitionDateContainer, ExhibitionPrice, ExhibitionPriceContainer, ExhibitionText,
    GraphicContainer, GraphicDescription, GraphicPrice, ImageContainer, InfoContainer, StyledImage, Title, Type, CheckBoxLabel,
    ArrowPriceContainer, DateModal, DateModalContainer,
    PriceModalDesktop,
    PriceModalMobile
} from './styles'
import { Exhibition } from '../../core/types/Exhibition'
import { PictureInfo } from '../../core/types/PictureInfo'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../core/hooks'
import LangEnum from '../../core/enums/LangEnum'
import { changeExhibitionPrice, removeItemFromCart } from '../../core/store/reducers/CartReducer'
import { PriceSelector } from './PriceSelector'
import { Calendar } from '../Calendar/input'

export type OrterCardProps = {
    orderItem: Exhibition | PictureInfo,
    changeSelectedItem: (isSelected: boolean, cartItem: Exhibition | PictureInfo) => void
}

export const OrderCard: React.FC<OrterCardProps> = ({ orderItem, changeSelectedItem }) => {
    const [selectedExhibitionDate, setSelectedExhibitionDate] = useState<string>("");
    const [selectedExhibitionPriceId, setSelectedExhibitionPriceId] = useState<string>("");
    const [exhibitionDateOpen, setExhibitionDateOpen] = useState<boolean>(false);
    const [isMobile] = useState<boolean>(window.innerWidth < 1458);
    const [exhibitionPriceOpen, setExhibitionPriceOpen] = useState<boolean>(false);
    const { t } = useTranslation(['global']);
    const globalReducer = useAppSelector(state => state.globalReducer);
    const dispatch = useAppDispatch();

    const exhibition = orderItem as Exhibition;
    const picture = orderItem as PictureInfo;

    const isExhibition = "addressId" in orderItem;
    const title = isExhibition ? "exhibition" : "graphic";
    const imageUrl = isExhibition ? exhibition.image : picture.imageUrl;

    const changeSelectedPriceId = (isChecked: boolean, priceId: string) => {
        if (exhibition.cartId && isChecked) {
            dispatch(changeExhibitionPrice({ cartId: exhibition.cartId, selectedPriceId: priceId }));
        }
    }

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

    const priceModalEl = useRef<HTMLDivElement>(null);
    const priceArrowEl = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const onClick = (e: any) => {
            if (priceModalEl.current && priceArrowEl.current) {
                const isOutsideClick = !priceModalEl.current.contains(e.target);
                const isNottitlePanelClick = !priceArrowEl.current.contains(e.target);
                if (isOutsideClick && isNottitlePanelClick) {
                    setExhibitionPriceOpen(false);
                }
            }
        }

        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const dateModalEl = useRef<HTMLDivElement>(null);
    const dateArrowEl = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const onClick = (e: any) => {
            if (dateModalEl.current && dateArrowEl.current) {
                const isOutsideClick = !dateModalEl.current.contains(e.target);
                const isNottitlePanelClick = !dateArrowEl.current.contains(e.target);
                if (isOutsideClick && isNottitlePanelClick) {
                    setExhibitionDateOpen(false);
                }
            }
        }

        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

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
                        <div>
                            <AngleArrow ref={dateArrowEl} className={exhibitionDateOpen ? "open" : ""} onClick={() => exhibitionDateWindowToggle(!exhibitionDateOpen)} />
                        </div>
                    </ExhibitionDateContainer>
                    <ExhibitionPriceContainer>
                        <ExhibitionPrice>{getExhibitionPriceById(selectedExhibitionPriceId)}</ExhibitionPrice>
                        <ArrowPriceContainer className={exhibitionPriceOpen ? "open " : ""} onClick={() => exhibitionPriceWindowToggle(!exhibitionPriceOpen)}>
                            <AngleArrow ref={priceArrowEl} className={exhibitionPriceOpen ? "open " : ""} />
                            {!isMobile && (<PriceModalDesktop ref={priceModalEl} className={exhibitionPriceOpen ? "open " : ""}>
                                <PriceSelector priceList={exhibition.prices} selectedPriceId={exhibition.selectedPriceId} cartId={exhibition.cartId}
                                    changeSelectedPriceId={(isChecked: boolean, priceId: string) => changeSelectedPriceId(isChecked, priceId)} />
                            </PriceModalDesktop>)}
                        </ArrowPriceContainer>
                    </ExhibitionPriceContainer>
                    {isMobile && (<PriceModalMobile ref={priceModalEl} className={exhibitionPriceOpen ? "open " : ""}>
                        <PriceSelector priceList={exhibition.prices} selectedPriceId={exhibition.selectedPriceId} cartId={exhibition.cartId}
                            changeSelectedPriceId={(isChecked: boolean, priceId: string) => changeSelectedPriceId(isChecked, priceId)} />
                    </PriceModalMobile>)}
                    <DateModal className={exhibitionDateOpen ? "open" : ""}>
                        <DateModalContainer ref={dateModalEl}>
                            <Calendar/>
                        </DateModalContainer>
                    </DateModal>
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
