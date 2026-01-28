import { equal } from "node:assert"
import { prisma } from "../../lib/prisma"
import { MedData } from "../../types"


const addMedicine = async (data: MedData) => {
    const { medicineName, price, image, stock, detels, manufacturer, sellerId, categorieId } = data
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
        })
        return result
    } catch (error: any) {
        return { error: error.message }
    }
}

const getAllMedicine = async (serch: string, category: string, minPrice: string, maxPrice: string, manufacturer: string) => {
    try {

        const allSearchAndFilter: any = {}


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
            ]
        }

        if (category) {
            const categorie = await prisma.categories.findFirst({
                where: {
                    categorieName: category
                }
            })

            console.log('categorie', categorie)
            if (!categorie) {
                return []

            }

            if (categorie) {
                allSearchAndFilter.categorieId = categorie.id
            }
        }



        if (minPrice || maxPrice) {
            allSearchAndFilter.price = {}
            if (minPrice) {
                allSearchAndFilter.price.gte = Number(minPrice)
            }
            if (maxPrice) {
                allSearchAndFilter.price.lte = Number(maxPrice)
            }
        }

        if (manufacturer) {
            allSearchAndFilter.manufacturer = {
                contains: manufacturer,
                mode: "insensitive"
            }
        }

        const result = await prisma.medicines.findMany({
            where: allSearchAndFilter
        })
        return result
    } catch (error: any) {
        return { error: error.message }
    }
}


const getMedicineByID = async (id: string) => {
    try {
        const result = await prisma.medicines.findUnique({
            where: {
                id
            }
        })
        return result
    } catch (error: any) {
        return { error: error.message }
    }
}


const updateMedicine = async (id: string, data: MedData) => {
    const { medicineName, price, image, stock, detels, manufacturer } = data

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
        })
        return result
    } catch (error: any) {
        return { error: error.message }
    }
}

const deleteMedicine = async (id: string) => {
    try {
        const result = await prisma.medicines.delete({
            where: {
                id
            }
        })
        return result
    } catch (error: any) {
        return { error: error.message }
    }
}



export const medicineService = {
    addMedicine,
    getAllMedicine,
    getMedicineByID,
    updateMedicine,
    deleteMedicine,
}