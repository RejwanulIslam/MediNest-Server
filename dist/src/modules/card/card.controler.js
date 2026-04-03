import { cardService } from "./card.service";
const addCard = async (req, res) => {
    const data = req.body;
    const result = await cardService.addCard(data);
    res.send(result);
};
const deleteCard = async (req, res) => {
    const ids = req.body.ids;
    console.log(ids);
    const result = await cardService.deleteCard(ids);
    res.send(result);
};
const getAllCard = async (req, res) => {
    const result = await cardService.getAllCard();
    res.send(result);
};
export const cardControler = {
    addCard,
    deleteCard,
    getAllCard
};
//# sourceMappingURL=card.controler.js.map