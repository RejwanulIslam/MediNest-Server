import { Request, Response } from "express"
import { userService } from "./user.service"

const getAllUser= async (req: Request, res: Response) => {
   try {
     const result = await userService.getAllUser()
    res.send(result)
   } catch (error: any) {
       res.send({error:error.message}) 
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id,status } = req.body
        
        const result = await userService.updateUser(id as string, status)
        res.send(result)
    } catch (error: any) {
        res.send({ error: error.message })
    }
}
const manageProfile = async (req: Request, res: Response) => {
    try {
        const { id} = req.params
        const data = req.body
        console.log(id,data)

        
        const result = await userService.manageProfile(id as string, data)
        res.send(result)
    } catch (error: any) {
        res.send({ error: error.message })
    }
}

export const userController = {
    getAllUser,
    updateUser,
    manageProfile
}