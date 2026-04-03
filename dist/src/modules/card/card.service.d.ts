interface Card {
    customerId: string;
    productId: string;
    quantity: number;
}
export declare const cardService: {
    addCard: (card: Card) => Promise<{
        id: string;
        customerId: string;
        productId: string;
        quantity: number;
    }>;
    deleteCard: (ids: string[]) => Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    getAllCard: () => Promise<({
        customer: {
            role: string | null;
            status: string | null;
            id: string;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            emailVerified: boolean;
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
        customerId: string;
        productId: string;
        quantity: number;
    })[]>;
};
export {};
//# sourceMappingURL=card.service.d.ts.map