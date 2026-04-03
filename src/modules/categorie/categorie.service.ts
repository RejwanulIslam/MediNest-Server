import { prisma } from "../../lib/prisma"


const addCatagoty=async(categorieName:string)=>{
const result= await prisma.categories.create({
    data:{categorieName}
  })
  return result
}
const getAllCatagoty=async()=>{
const result= await prisma.categories.findMany()
  return result
}
const deleteCatagoty=async(id:string)=>{
const result= await prisma.categories.delete({
  where:{
    id
  }
})
  return result
}



export const categorieService={
    addCatagoty,
    getAllCatagoty,
    deleteCatagoty,
}