import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { useNavigate, useSearchParams } from 'react-router-dom';
import ExhibitionsData from '../../core/data/exhibitionsData.json';
import AddressesData from '../../core/data/addresses.json';
import AddressesDataRu from '../../core/data/addressesRu.json';
import { Exhibition } from '../../core/types/Exhibition';
import { useAppSelector } from '../../core/hooks';
import LangEnum from '../../core/enums/LangEnum';
import { Address as AddressType  } from '../../core/types/Address';
import RouteNamesEnum from '../../core/enums/RouteNamesEnum';
import { Main } from './Main';
import { AboutExhibition } from './AboutExhibition';
import { Tickets } from './Tickets';
import { Address } from './Address';

export const DetailedExhibitionPage = () => {
    const navigate = useNavigate();
    const [address, setAddres] = useState<AddressType>();
    const [searchParams] = useSearchParams();
    const globalReducer = useAppSelector(state => state.globalReducer);
    const [name] = useState(searchParams.get("name"));
    const [exhibition] = useState<Exhibition | undefined>(ExhibitionsData.find(e => e.title === name) as Exhibition);

    useEffect(() => {
        if ((!name) || (!exhibition)) {
            navigate(RouteNamesEnum.EXHIBITIONS);

        }
    }, [name, exhibition, navigate]);

    useEffect(() => {
        if (exhibition) {
            const AddressDataList = (globalReducer.Lang === LangEnum.EN ? AddressesData : AddressesDataRu) as AddressType[];
            const currentAddress = AddressDataList.find(a => a.id === exhibition.addressId)
            setAddres(currentAddress);
        }

    }, [globalReducer.Lang, exhibition]);


    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, []);

    return (
        <Container>
            {exhibition && (<Main exhibition={exhibition} />)}
            {exhibition && address && (<Address address={address} />)}
            {exhibition && (<Tickets exhibition={exhibition} />)}
            {exhibition && (<AboutExhibition aboutExhibition={exhibition.aboutExhibition} />)}
        </Container>
    )
}
