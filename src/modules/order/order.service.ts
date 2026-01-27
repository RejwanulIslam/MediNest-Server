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


const getOrderByID = async (id: string) => {
   try {
     const result = await prisma.orders.findUnique({
        where: {
            id
        }
    })
    return result
   } catch (error:any) {
    return {error:error.message}
   }
}


const updateOrder = async (id: string, status:orderStatus) => {

  try {
      const result = await prisma.orders.update({
        where: {
            id
        },
        data: {
            status
        }
    })
    return result
  } catch (error:any) {
    return {error:error.message}
   }
}

const deleteOrder = async (id: string) => {
   try {
     const result = await prisma.orders.delete({
        where: {
            id
        }
    })
    return result
   } catch (error:any) {
    return {error:error.message}
   }
}



export const orderService = {
    addOrder,
    getAllOrder,
    getOrderByID,
    updateOrder,
    deleteOrder
}