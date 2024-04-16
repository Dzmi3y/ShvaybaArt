export type ExhibitionPrice = {
    id: string,
    type: string,
    typeRu: string,
    price: number
}

export type AboutExhibition = {
    image: string,
    title: string,
    titleRu: string,
    text: string,
    textRu: string,
}


export type Exhibition = {
    cartId?: string,
    id: string,
    image: string,
    mobilImage: string,
    title: string,
    from: string,
    to: string,
    addressId: string,
    address: string,
    addressRu: string,
    itIsNow: boolean,
    priceInfo: string,
    priceInfoRu: string,
    prices: ExhibitionPrice[],
    aboutExhibition: AboutExhibition,
    selectedPriceId: string;
}




