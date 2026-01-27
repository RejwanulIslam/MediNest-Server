import { prisma } from "../../lib/prisma"

const getAllUser = async () => {
    try {
        const result = await prisma.user.findMany()
        return result
    } catch (error: any) {
        return { error: error.message }
    }
}

const updateUser = async (id: string, status:string) => {

  try {
      const result = await prisma.user.update({
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

export const userService = {
    getAllUser,
    updateUser,
}