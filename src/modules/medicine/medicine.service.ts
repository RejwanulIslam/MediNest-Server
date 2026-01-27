import { prisma } from "../../lib/prisma"


const addCatagoty=async(categorieName:string)=>{
const result= await prisma.categories.create({
    data:{categorieName}
  })
  return result
}



export const medicineService={
    addCatagoty
}