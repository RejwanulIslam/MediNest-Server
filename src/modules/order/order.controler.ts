import { Request, Response } from "express"
import { orderService } from "./order.service"


const addOrder = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const userID=req.user?.id
        if(!userID){
          return res.send("Your user id is null")
        }
        const result = await orderService.addOrder(data,userID)
        res.send(result)
    } catch (error: any) {
       res.send({error:error.message}) 
    }
}

const getAllOrder = async (req: Request, res: Response) => {
   try {
     const result = await orderService.getAllOrder()
    res.send(result)
   } catch (error: any) {
       res.send({error:error.message}) 
    }
}
// const getMedicineByID = async (req: Request, res: Response) => {
//   try {
//      const { id } = req.params
//     const result = await medicineService.getMedicineByID(id as string)
//     res.send(result) 
//   } catch (error: any) {
//        res.send({error:error.message}) 
//     }
// }
// const updateMedicine = async (req: Request, res: Response) => {
//   try {
//       const { id } = req.params
//     const data = req.body
//     const result = await medicineService.updateMedicine(id as string, data)
//     res.send(result)
//   } catch (error: any) {
//        res.send({error:error.message}) 
//     }
// }

// const deleteMedicine = async (req: Request, res: Response) => {
//   try {
//      const { id } = req.params
//     const result = await medicineService.deleteMedicine(id as string)
//     res.send(result) 
//   } catch (error: any) {
//        res.send({error:error.message}) 
//     }
// }

export const orderControler = {
    addOrder,
    getAllOrder,
    // getMedicineByID,
    // updateMedicine,
    // deleteMedicine,
}