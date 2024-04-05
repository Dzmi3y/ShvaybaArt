import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { useNavigate, useSearchParams } from 'react-router-dom';
import ExhibitionsData from '../../core/data/exhibitionsData.json';
import AddressesData from '../../core/data/addresses.json';
import AddressesDataRu from '../../core/data/addressesRu.json';
import { Exhibition } from '../../core/types/Exhibition';
import { useAppSelector } from '../../core/hooks';
import LangEnum from '../../core/enums/LangEnum';
import { Address } from '../../core/types/Address';
import RouteNamesEnum from '../../core/enums/RouteNamesEnum';

export const DetailedExhibitionPage = () => {
    const navigate = useNavigate();
    const [address, setAddres] = useState<Address>();
    const [searchParams] = useSearchParams();
    const globalReducer = useAppSelector(state => state.globalReducer);
    const [name] = useState(searchParams.get("name"));
    const [exhibition] = useState<Exhibition | undefined>(ExhibitionsData.find(e => e.title === name) as Exhibition);


    useEffect(() => {
        if ((!name) || (!exhibition)) {
            navigate(RouteNamesEnum.EXHIBITIONS);
        }
    }, [name, exhibition]);

    useEffect(() => {
        if (exhibition) {
            const AddressDataList = (globalReducer.Lang === LangEnum.EN ? AddressesData : AddressesDataRu) as Address[];
            const currentAddress = AddressDataList.find(a => a.id === exhibition.addressId)
            setAddres(currentAddress);
        }

    }, [globalReducer.Lang, exhibition]);

    console.log(exhibition);
    console.log(address);

    return (
        <Container>

        </Container>
    )
}
