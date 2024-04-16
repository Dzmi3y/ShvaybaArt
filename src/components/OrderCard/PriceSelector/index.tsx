import React from 'react';
import { Container, Name, Price, Radiobutton, RadiobuttonContainer, RadiobuttonLabel, RowContainer } from './styles';
import { ExhibitionPrice } from '../../../core/types/Exhibition';
import { useAppSelector } from '../../../core/hooks';
import LangEnum from '../../../core/enums/LangEnum';

export type PriceSelectorProps = {
    priceList: ExhibitionPrice[],
    selectedPriceId: string,
    changeSelectedPriceId: (isChecked: boolean, priceId: string) => void,
    cartId?: string
}

export const PriceSelector: React.FC<PriceSelectorProps> = ({ priceList, selectedPriceId, changeSelectedPriceId, cartId }) => {
    const globalReducer = useAppSelector(state => state.globalReducer);

    return (
        <Container>
            {priceList.map((price) => (
                <RowContainer key={price.id}>
                    <Name>{globalReducer.Lang === LangEnum.EN ? price.type : price.typeRu}</Name>
                    <Price>{price.price}$</Price>
                    <RadiobuttonContainer>
                        <RadiobuttonLabel><Radiobutton type='radio' name={'price'+cartId} defaultChecked={price.id === selectedPriceId}
                            onChange={(e) => { changeSelectedPriceId(e.target.checked, price.id) }} /><span></span></RadiobuttonLabel>
                    </RadiobuttonContainer>
                </RowContainer>
            ))}
        </Container>
    )
}
