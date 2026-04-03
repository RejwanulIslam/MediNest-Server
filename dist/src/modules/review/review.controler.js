import { reviewService } from "./review.service";
const addReview = async (req, res) => {
    try {
        const data = req.body;
        const id = req.user?.id;
        if (!id) {
            return res.send("your user id is null");
        }
        const result = await reviewService.addReview(data, id);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
const getAllReview = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await reviewService.getAllReview(id);
        res.send(result);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
export const reviewControler = {
    addReview,
    getAllReview,
};
//# sourceMappingURL=review.controler.js.map