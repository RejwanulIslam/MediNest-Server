import { orderStatus } from "../../generated/prisma/enums";

export interface Order {
    id: string;
    customerId: string;
    productId: string;
    shippingAddress: string;
    totalAmount: number;
    status: orderStatus;
    items:[]
}