import { categorieService } from "./categorie.service";
const addCatagoty = async (req, res) => {
    const { categorieName } = req.body;
    // if (!categorieName || typeof categorieName !== 'string') {
    //     res.send('place enter your catagory name')
    // }
    const result = await categorieService.addCatagoty(categorieName);
    res.send(result);
};
const getAllCatagoty = async (req, res) => {
    const result = await categorieService.getAllCatagoty();
    res.send(result);
};
const deleteCatagoty = async (req, res) => {
    const { id } = req.params;
    const result = await categorieService.deleteCatagoty(id);
    res.send(result);
};
export const categorieControler = {
    addCatagoty,
    getAllCatagoty,
    deleteCatagoty
};
//# sourceMappingURL=categorie.controler.js.map