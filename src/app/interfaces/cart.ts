export interface Cart {
    numOfCartItems: number,
    data : Data
}

interface Data{
    totalCartPrice: number,
    products: product [],
    _id: string,
}

interface product{
    price: number,
    count: number,
    product: innerProduct
 
}

interface innerProduct{
    id: string,
    title: String,
    imageCover:string
}