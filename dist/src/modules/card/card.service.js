import { prisma } from "../../lib/prisma";
const addCard = async (card) => {
    const { customerId, productId, quantity } = card;
    const result = await prisma.card.create({
        data: {
            customerId,
            productId,
            quantity,
        }
    });
    return result;
};
const getAllCard = async () => {
    const result = await prisma.card.findMany({
        include: {
            customer: true,
            product: true
        }
    });
    return result;
};
const deleteCard = async (ids) => {
    const result = await prisma.card.deleteMany({
        where: {
            id: {
                in: ids
            }
        }
    });
    return result;
};
export const cardService = {
    addCard,
    deleteCard,
    getAllCard
};
//# sourceMappingURL=card.service.js.map