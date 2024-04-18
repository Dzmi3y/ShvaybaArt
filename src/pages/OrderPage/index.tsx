import React, { useEffect, useRef, useState } from 'react'
import { Container, OrderConfirmationContainer, OrderConfirmationModal, OrderListContainer, Title, TotalPriceContainer, TotalPriceText, TotalPriceValue } from './styles'
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { OrderCard } from '../../components/OrderCard';
import { LightButton } from '../../components/Buttons/LightButton';
import { Exhibition } from '../../core/types/Exhibition';
import { PictureInfo } from '../../core/types/PictureInfo';
import { OrderConfirmation } from './OrderConfirmation';
import { createOrder } from '../../core/store/reducers/CartReducer';


export const OrderPage = () => {
  const isMobile: boolean = window.innerWidth < 1458;
  const { t } = useTranslation(['global']);
  const cartReducer = useAppSelector(state => state.cartReducer);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isEndOfPage, setIsEndOfPage] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<(Exhibition | PictureInfo)[]>([]);
  const [isOrderConfirmationModalOpen, setIsOrderConfirmationModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const containerEl = useRef<HTMLDivElement>(null)
  const buyButtonText = isMobile ? `${t("buy", { ns: ['global'] })} ${totalPrice}$` : t("buy", { ns: ['global'] });

  const createOrderHandler = (email: string, phone: string) => {
    const cartIdList = selectedItems.map(si => si.cartId as string);
    dispatch(createOrder({ cartIdList, email, phone }));
  }

  const buyButtonClick = () => {
    setIsOrderConfirmationModalOpen(true);
  }

  const changeSelectedItem = (isSelected: boolean, cartItem: Exhibition | PictureInfo) => {
    if (isSelected) {
      setSelectedItems([...selectedItems, cartItem]);
    } else {
      setSelectedItems(selectedItems.filter(ci => ci.cartId !== cartItem.cartId));
    }
  }


  useEffect(() => {
    let price: number = 0;
    const updatedSelectedValues = cartReducer.Cart.filter(ci => selectedItems.find(si => si.cartId === ci.cartId));

    updatedSelectedValues.forEach((cartItem) => {
      const isExhibition = "addressId" in cartItem;
      if (isExhibition) {
        const exhibition = (cartItem as Exhibition);
        const selectedExhibitionPrice = exhibition.prices.find(p => p.id === exhibition.selectedPriceId)?.price;
        price += +(selectedExhibitionPrice || 0);
      } else {
        const picture = (cartItem as PictureInfo);
        price += +(picture.price);
      }

    }, [selectedItems])


    setTotalPrice(price)

  }, [selectedItems, cartReducer.Cart]);


  useEffect(() => {
    const onScroll = () => {
      if (containerEl.current) {
        const newValue = window.innerHeight + window.scrollY > containerEl.current.offsetHeight;
        setIsEndOfPage(newValue);
      }
    }

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll,);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const orderConfirmationModalEl = useRef<HTMLDivElement>(null);
  const orderConfirmationButtonEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: any) => {
      if (orderConfirmationModalEl.current && orderConfirmationButtonEl.current) {
        const isOutsideClick = !orderConfirmationModalEl.current.contains(e.target);
        const isNottitlePanelClick = !orderConfirmationButtonEl.current.contains(e.target);
        if (isOutsideClick && isNottitlePanelClick) {
          setIsOrderConfirmationModalOpen(false);
        }
      }
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (<Container ref={containerEl}>
    <Title>{t("order", { ns: ['global'] })}</Title>
    <OrderListContainer>
      {cartReducer.Cart.map((orderItem) => (
        <OrderCard key={orderItem.cartId} changeSelectedItem={changeSelectedItem} orderItem={orderItem} />))}
    </OrderListContainer>

    <TotalPriceContainer className={(isMobile && isEndOfPage) ? "absolute" : ""}>
      <TotalPriceText>{t("overallPrice", { ns: ['global'] })}</TotalPriceText>
      <TotalPriceValue>{totalPrice}$</TotalPriceValue>
      <div ref={orderConfirmationButtonEl}>
        <LightButton disabled={totalPrice === 0} onClick={buyButtonClick}>{buyButtonText}</LightButton>
      </div>
    </TotalPriceContainer>
    <OrderConfirmationModal className={isOrderConfirmationModalOpen ? "open" : ""}>
      <OrderConfirmationContainer ref={orderConfirmationModalEl}>
        <OrderConfirmation createOrder={createOrderHandler} closeModal={() => { setIsOrderConfirmationModalOpen(false) }} />
      </OrderConfirmationContainer>
    </OrderConfirmationModal>
  </Container>
  )
}
