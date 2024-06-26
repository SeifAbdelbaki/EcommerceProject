export interface Product {
    _id: string,
    title: string,
    description: string,
    imageCover:string,
    ratingsAverage: number,
    category: Category,
    price: number,
    brands: Brands,
    images: string[]
}

export interface Category{
    name: string,
    image: string
}

export interface Brands{
    name: string,
    image: string
}