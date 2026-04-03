import { prisma } from "../../lib/prisma";
const addReview = async (data, id) => {
    const { productId, rating, comment, } = data;
    try {
        const result = await prisma.reviews.create({
            data: {
                customerId: id,
                productId,
                rating,
                comment
            }
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
const getAllReview = async (productId) => {
    try {
        const result = await prisma.reviews.findMany({
            where: {
                productId
            }
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export const reviewService = {
    addReview,
    getAllReview,
};
//# sourceMappingURL=review.service.js.map