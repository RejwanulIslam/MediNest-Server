import { prisma } from "../../lib/prisma";
const addMedicine = async (data) => {
    const { medicineName, price, image, stock, detels, manufacturer, sellerId, categorieId } = data;
    try {
        const result = await prisma.medicines.create({
            data: {
                medicineName,
                price,
                image: image,
                stock,
                detels,
                manufacturer,
                sellerId,
                categorieId
            }
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
const getAllMedicine = async (serch, category, minPrice, maxPrice, manufacturer) => {
    try {
        const allSearchAndFilter = {};
        if (serch) {
            allSearchAndFilter.OR = [
                {
                    medicineName: {
                        contains: serch,
                        mode: "insensitive"
                    }
                },
                {
                    detels: {
                        contains: serch,
                        mode: "insensitive"
                    }
                },
                {
                    manufacturer: {
                        contains: serch,
                        mode: "insensitive"
                    }
                },
            ];
        }
        if (category) {
            const categorie = await prisma.categories.findFirst({
                where: {
                    categorieName: category
                }
            });
            console.log('categorie', categorie);
            if (!categorie) {
                return [];
            }
            if (categorie) {
                allSearchAndFilter.categorieId = categorie.id;
            }
        }
        if (minPrice || maxPrice) {
            allSearchAndFilter.price = {};
            if (minPrice) {
                allSearchAndFilter.price.gte = Number(minPrice);
            }
            if (maxPrice) {
                allSearchAndFilter.price.lte = Number(maxPrice);
            }
        }
        if (manufacturer) {
            allSearchAndFilter.manufacturer = {
                contains: manufacturer,
                mode: "insensitive"
            };
        }
        const result = await prisma.medicines.findMany({
            where: allSearchAndFilter,
            include: {
                categorie: true
            }
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
const getMedicineByID = async (id) => {
    try {
        const result = await prisma.medicines.findUnique({
            where: {
                id
            },
            include: {
                categorie: true
            }
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
const updateMedicine = async (id, data) => {
    const { medicineName, price, image, stock, detels, manufacturer } = data;
    try {
        const result = await prisma.medicines.update({
            where: {
                id
            },
            data: {
                medicineName,
                price,
                image: image,
                stock,
                detels,
                manufacturer,
            }
        });
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
const deleteMedicine = async (id) => {
    try {
        const result = await prisma.medicines.delete({
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
export const medicineService = {
    addMedicine,
    getAllMedicine,
    getMedicineByID,
    updateMedicine,
    deleteMedicine,
};
//# sourceMappingURL=medicine.service.js.map