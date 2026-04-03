import { prisma } from "../../lib/prisma";
const getAllUser = async () => {
    try {
        const result = await prisma.user.findMany();
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
const updateUser = async (id, status) => {
    try {
        const result = await prisma.user.update({
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
const manageProfile = async (id, data) => {
    const { name, role, image } = data;
    try {
        const result = await prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                role,
                image
            }
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export const userService = {
    getAllUser,
    updateUser,
    manageProfile,
};
//# sourceMappingURL=user.service.js.map