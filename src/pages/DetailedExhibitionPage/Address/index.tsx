import React, { useEffect, useRef, useState } from 'react'
import {
    AddressContainer, Container, Days, Hours, HoursContainer, HoursItemContainer, AddressText,
    MapContainer, TextContainer, TitleAddress, TitleHours, Minutes, TitleInfo, InfoContainer,
    GpsContainer, StationContainer, StationType, StationName, GpsTitle, Gps,
    StyledIframe, ResizeImage,
    Modal,
    ModalIframe,
    CloseImage,
    IframeBlocker,
    ModalContainer
} from './styles'
import { Address as AddressData, ScheduleTime } from '../../../core/types/Address'
import { useTranslation } from 'react-i18next';
import DarkResizeImage from "../../../assets/images/common/dark_scale_arrows.png";

export const Address: React.FC<{ address: AddressData }> = ({ address }) => {
    const { t } = useTranslation(['global']);
    const isMobile: boolean = window.innerWidth < 1458;
    const [showModal, setShowModal] = useState<boolean>();
    const modalIframeEl = useRef<HTMLIFrameElement>(null);
    const iframeBlockerEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClick = (e: any) => {
            const isIframeBlockerElClick = iframeBlockerEl.current?.contains(e.target);
            if (modalIframeEl.current && !isIframeBlockerElClick) {
                const isOutsideClick = !modalIframeEl.current.contains(e.target);
                if (isOutsideClick && showModal) {
                    console.log("click")
                    setShowModal(false);
                }
            }
        }

        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [showModal]);

    useEffect(() => {
        document.body.style.overflow = showModal ? 'hidden' : '';
    }, [showModal]);

    return (<Container>
        <TextContainer>
            <AddressContainer>
                <TitleAddress>{t("address", { ns: ['global'] })}{isMobile ? ":" : ""}</TitleAddress>
                {isMobile ? (<AddressText>{address.city}. {address.address}</AddressText>)
                    : (<AddressText>{address.address} <br /> {address.city}</AddressText>)}
            </AddressContainer>
            <HoursContainer>
                <TitleHours>{t("openingHours", { ns: ['global'] })}</TitleHours>
                {address.schedule.map((sheduleItem, i) => (
                    <HoursItemContainer key={i}>
                        <Days>{sheduleItem.days}</Days>
                        {
                            (typeof sheduleItem.description === "string") ? (
                                <Hours>{sheduleItem.description as string}</Hours>

                            ) : (
                                <>
                                    <Hours>{(sheduleItem.description as ScheduleTime).fromH}</Hours>
                                    <Minutes>{(sheduleItem.description as ScheduleTime).fromM}</Minutes>
                                    <Hours>-</Hours>
                                    <Hours>{(sheduleItem.description as ScheduleTime).toH}</Hours>
                                    <Minutes>{(sheduleItem.description as ScheduleTime).toM}</Minutes>
                                </>
                            )
                        }
                    </HoursItemContainer>
                ))}
            </HoursContainer>
            <TitleInfo>{t("hawToFind", { ns: ['global'] })}</TitleInfo>
            <InfoContainer>
                <StationContainer>
                    <StationType>{address.stationType}{isMobile ? ":" : ""}</StationType>
                    <StationName>{address.stationName}</StationName>
                </StationContainer>
                <GpsContainer>
                    <GpsTitle>GPS:</GpsTitle>
                    <Gps>{address.gps}</Gps>
                </GpsContainer>
            </InfoContainer>
        </TextContainer>
        <MapContainer >
            <StyledIframe src={address.googleMapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></StyledIframe>
            <ResizeImage src={DarkResizeImage} />
            <IframeBlocker ref={iframeBlockerEl} onClick={() => setShowModal(true)}></IframeBlocker>
        </MapContainer>
        {showModal && (<Modal>
            <ModalContainer>
                <ModalIframe ref={modalIframeEl} src={address.googleMapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></ModalIframe>
                <CloseImage onClick={() => setShowModal(false)} />
            </ModalContainer>
        </Modal>)}
    </Container>
    )
}
