import { Address } from "./address";
import { ProductInOrder } from "./product-in-order";

export interface OrderAPI {
    _id: string;
    userId: string;
    products: [ProductInOrder];
    amount: number;
    address: Address;
    status: string;
    createdAt?: Date;
    updatedAt?: Date
}
