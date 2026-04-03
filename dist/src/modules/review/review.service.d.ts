import { Review } from "../../types";
export declare const reviewService: {
    addReview: (data: Review, id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        productId: string;
        rating: number;
        comment: string | null;
    } | {
        error: any;
    }>;
    getAllReview: (productId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        productId: string;
        rating: number;
        comment: string | null;
    }[] | {
        error: any;
    }>;
};
//# sourceMappingURL=review.service.d.ts.map