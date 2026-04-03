import { userService } from "./user.service";
const getAllUser = async (req, res) => {
    try {
        const result = await userService.getAllUser();
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const updateUser = async (req, res) => {
    try {
        const { id, status } = req.body;
        const result = await userService.updateUser(id, status);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const manageProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        console.log(id, data);
        const result = await userService.manageProfile(id, data);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
export const userController = {
    getAllUser,
    updateUser,
    manageProfile
};
//# sourceMappingURL=user.controller.js.map