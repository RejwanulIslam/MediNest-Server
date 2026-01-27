import { orderStatus } from "../../../generated/prisma/enums"
import { prisma } from "../../lib/prisma"
import { Order } from "../../types"


const addOrder = async (data: Order,userID:string) => {
    const {productId, shippindAddress, totalAmount, status } = data
    try {
        const result = await prisma.orders.create({
            data: {
                customerId:userID,
                productId,
                shippindAddress,
                totalAmount,
                status:status as orderStatus
            }
        })
        return result
    } catch (error: any) {
        return { error: error.message }
    }
}

const getAllOrder = async () => {
 try {
    const result = await prisma.orders.findMany()
    return result   
 }  catch (error:any) {
    return {error:error.message}
   }
}


// const getMedicineByID = async (id: string) => {
//    try {
//      const result = await prisma.medicines.findUnique({
//         where: {
//             id
//         }
//     })
//     return result
//    } catch (error:any) {
//     return {error:error.message}
//    }
// }


// const updateMedicine = async (id: string, data: MedData) => {
//     const { medicineName, price, image, stock, detels, manufacturer } = data

//   try {
//       const result = await prisma.medicines.update({
//         where: {
//             id
//         },
//         data: {
//             medicineName,
//             price,
//             image: image,
//             stock,
//             detels,
//             manufacturer,
//         }
//     })
//     return result
//   } catch (error:any) {
//     return {error:error.message}
//    }
// }

// const deleteMedicine = async (id: string) => {
//    try {
//      const result = await prisma.medicines.delete({
//         where: {
//             id
//         }
//     })
//     return result
//    } catch (error:any) {
//     return {error:error.message}
//    }
// }



export const orderService = {
    addOrder,
    getAllOrder,
    // getMedicineByID,
    // updateMedicine,
    // deleteMedicine,
}