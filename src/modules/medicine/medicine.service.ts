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
   } catch (error:any) {
    return {error:error.message}
   }
}

const getAllMedicine = async () => {
 try {
    const result = await prisma.medicines.findMany()
    return result   
 }  catch (error:any) {
    return {error:error.message}
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
   } catch (error:any) {
    return {error:error.message}
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
  } catch (error:any) {
    return {error:error.message}
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
   } catch (error:any) {
    return {error:error.message}
   }
}



export const medicineService = {
    addMedicine,
    getAllMedicine,
    getMedicineByID,
    updateMedicine,
    deleteMedicine,
}