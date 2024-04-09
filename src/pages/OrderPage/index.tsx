import React from 'react'
import { Container, OrderListContainer, TotalPriceContainer } from './styles'
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { OrderCard } from '../../components/OrderCard';

export const OrderPage = () => {

  // const { t } = useTranslation(['global']);
  const cartReducer = useAppSelector(state => state.cartReducer);
  // const dispatch = useAppDispatch();
  //{t("address", { ns: ['global'] })}

  return (<Container>
    <OrderListContainer>
      {cartReducer.Cart.map((orderItem) => (
        <OrderCard key={orderItem.id} orderItem={orderItem} />))}
    </OrderListContainer>

    <TotalPriceContainer>

    </TotalPriceContainer>

  </Container>
  )
}
