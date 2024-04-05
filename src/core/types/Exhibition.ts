export type ExhibitionPrice = {
    id: string,
    type: string,
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
    prices: ExhibitionPrice[],
    aboutExhibition: AboutExhibition
}




