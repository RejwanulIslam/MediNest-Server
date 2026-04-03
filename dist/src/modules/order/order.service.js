import { prisma } from "../../lib/prisma";
const addOrder = async (data, userID) => {
    const { shippingAddress, totalAmount, status, items } = data;
    try {
        const result = await prisma.$transaction(async (tx) => {
            const order = await tx.orders.create({
                data: {
                    customerId: userID,
                    shippingAddress,
                    totalAmount,
                    status
                },
            });
            await tx.orderItem.createMany({
                data: items.map((item) => ({
                    orderId: order.id,
                    productId: item.productId,
                    quantity: item.quantity,
                })),
            });
            return order;
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
const getAllOrder = async () => {
    try {
        const result = await prisma.orderItem.findMany({
            include: {
                order: true,
                product: true
            },
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
const getOrderByID = async (id) => {
    try {
        const result = await prisma.orders.findUnique({
            where: {
                id
            }
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
const updateOrder = async (id, status) => {
    try {
        const result = await prisma.orders.update({
            where: {
                id
            },
            data: {
                status
            }
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
const deleteOrder = async (id) => {
    try {
        const result = await prisma.orders.delete({
            where: {
                id
            }
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export const orderService = {
    addOrder,
    getAllOrder,
    getOrderByID,
    updateOrder,
    deleteOrder
};
//# sourceMappingURL=order.service.js.map