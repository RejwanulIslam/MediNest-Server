import { Router } from "express"
import { categorieControler } from "./categorie.controler"

const router=Router()


router.post('/addcatagoty',categorieControler.addCatagoty)

export const categorieRouter=router