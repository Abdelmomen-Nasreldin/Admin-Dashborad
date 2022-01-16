export interface ProductAPI {
    _id: string;
    title: string;
    desc: string;
    imageSrc: string;
    categories: [string];
    size: [string];
    quantity: number;
    price: number;
    inStock: boolean;
    createdAt?: Date;
    updatedAt?: Date
}
