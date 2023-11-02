export interface ICart {
    products: ICartItem[]
}

export interface ICartItem {
    productId: number,
    number: number
}