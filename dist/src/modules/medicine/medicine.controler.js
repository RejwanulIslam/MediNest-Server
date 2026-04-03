import { medicineService } from "./medicine.service";
const addMedicine = async (req, res) => {
    try {
        const data = req.body;
        const result = await medicineService.addMedicine(data);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const getAllMedicine = async (req, res) => {
    try {
        const { serch, category, minPrice, maxPrice, manufacturer } = req.query;
        const result = await medicineService.getAllMedicine(serch, category, minPrice, maxPrice, manufacturer);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const getMedicineByID = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await medicineService.getMedicineByID(id);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const updateMedicine = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await medicineService.updateMedicine(id, data);
        console.log(result);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const deleteMedicine = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await medicineService.deleteMedicine(id);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
export const medicineControler = {
    addMedicine,
    getAllMedicine,
    getMedicineByID,
    updateMedicine,
    deleteMedicine,
};
//# sourceMappingURL=medicine.controler.js.map