import { Request, Response } from "express"
import { orderService } from "./order.service"


const addOrder = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const userID = req.user?.id
        if (!userID) {
            return res.send("Your user id is null")
        }
        const result = await orderService.addOrder(data, userID)
        res.send(result)
    } catch (error: any) {
        res.send({ error: error.message })
    }
}

const getAllOrder = async (req: Request, res: Response) => {
    try {
        const result = await orderService.getAllOrder()
        res.send(result)
    } catch (error: any) {
        res.send({ error: error.message })
    }
}
const getOrderByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        console.log("right code now")
        console.log(id)
        const result = await orderService.getOrderByID(id as string)
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "No order found with this ID"
            });
        }
        res.status(200).json(result);
    } catch (error: any) {
        res.send({ error: error.message })
    }
}
const updateOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.body
        const { status } = req.body
        console.log(id, status)
        const result = await orderService.updateOrder(id as string, status)
        res.send(result)
    } catch (error: any) {
        res.send({ error: error.message })
    }
}

const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await orderService.deleteOrder(id as string)
        res.send(result)
    } catch (error: any) {
        res.send({ error: error.message })
    }
}

export const orderControler = {
    addOrder,
    getAllOrder,
    getOrderByID,
    updateOrder,
    deleteOrder
}