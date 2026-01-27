import { prisma } from "../../lib/prisma"
import { MedData } from "../../types"


const addMedicine = async (data:MedData) => {
const {medicineName,price,image,stock,detels,manufacturer,sellerId,categorieId}=data
    const result = await prisma.medicines.create({
        data:{
           medicineName ,
           price,
           image:image,
           stock,
           detels,
           manufacturer,
           sellerId,
           categorieId
        }
    })
    return result
}

const getAllMedicine = async () => {
    const result = await prisma.medicines.findMany()
    return result
}


const getMedicineByID = async (id:string) => {
    const result = await prisma.medicines.findUnique({
        where:{
            id
        }
    })
    return result
}



export const medicineService = {
    addMedicine,
    getAllMedicine,
    getMedicineByID,
}