import { orderService } from "./order.service";
const addOrder = async (req, res) => {
    try {
        const data = req.body;
        const userID = req.user?.id;
        if (!userID) {
            return res.send("Your user id is null");
        }
        const result = await orderService.addOrder(data, userID);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const getAllOrder = async (req, res) => {
    try {
        const result = await orderService.getAllOrder();
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const getOrderByID = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await orderService.getOrderByID(id);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const updateOrder = async (req, res) => {
    try {
        const { id } = req.body;
        const { status } = req.body;
        console.log(id, status);
        const result = await orderService.updateOrder(id, status);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await orderService.deleteOrder(id);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
export const orderControler = {
    addOrder,
    getAllOrder,
    getOrderByID,
    updateOrder,
    deleteOrder
};
//# sourceMappingURL=order.controler.js.map