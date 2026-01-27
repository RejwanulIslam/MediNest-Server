export interface Order {
    id: string;
    customerId: string;
    productId: string;
    shippindAddress: string;
    totalAmount: number;
    status: string;
}