import React from 'react'
import {
    AddressContainer, Container, Days, Hours, HoursContainer, HoursItemContainer, AddressText,
    MapContainer, TextContainer, TitleAddress, TitleHours, Minutes, TitleInfo, InfoContainer,
    GpsContainer, StationContainer, StationType, StationName, GpsTitle, Gps,
    StyledIframe, ResizeImage
} from './styles'
import { Address as AddressData, ScheduleTime } from '../../../core/types/Address'
import { useTranslation } from 'react-i18next';
import DarkResizeImage from "../../../assets/images/common/dark_scale_arrows.png";

export const Address: React.FC<{ address: AddressData }> = ({ address }) => {
    const { t } = useTranslation(['global']);
    const isMobile: boolean = window.innerWidth < 1458;

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
        <MapContainer>
            <StyledIframe src={address.googleMapSrc}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></StyledIframe>
            <ResizeImage src={DarkResizeImage}/>
        </MapContainer>
    </Container>
    )
}
