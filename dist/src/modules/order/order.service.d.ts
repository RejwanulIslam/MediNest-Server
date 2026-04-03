import { orderStatus } from "../../../generated/prisma/enums";
import { Order } from "../../types";
export declare const orderService: {
    addOrder: (data: Order, userID: string) => Promise<{
        status: orderStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        shippingAddress: string;
        totalAmount: number;
        customerId: string;
    } | {
        error: any;
    }>;
    getAllOrder: () => Promise<({
        order: {
            status: orderStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            shippingAddress: string;
            totalAmount: number;
            customerId: string;
        };
        product: {
            id: string;
            medicineName: string;
            price: number;
            image: string | null;
            stock: number;
            detels: string;
            manufacturer: string;
            createdAt: Date;
            updatedAt: Date;
            sellerId: string;
            categorieId: string;
        };
    } & {
        id: string;
        orderId: string;
        productId: string;
        quantity: number;
    })[] | {
        error: any;
    }>;
    getOrderByID: (id: string) => Promise<{
        status: orderStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        shippingAddress: string;
        totalAmount: number;
        customerId: string;
    } | {
        error: any;
    } | null>;
    updateOrder: (id: string, status: orderStatus) => Promise<{
        status: orderStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        shippingAddress: string;
        totalAmount: number;
        customerId: string;
    } | {
        error: any;
    }>;
    deleteOrder: (id: string) => Promise<{
        status: orderStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        shippingAddress: string;
        totalAmount: number;
        customerId: string;
    } | {
        error: any;
    }>;
};
//# sourceMappingURL=order.service.d.ts.map