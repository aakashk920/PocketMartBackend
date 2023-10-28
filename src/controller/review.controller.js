const reviewService = require("../services/review.service")
const createReview = async (res, req) => {
    const user = req.user;
    try {
        const review = await reviewService.createReview(req.body, user);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}


const getAllReview = async (res, req) => {
    const productId = req.params.productId;
    const user = req.user;
try {
    const reviews= await reviewService.getAllReview(productId)
} catch (error) {
    return res.status(500).send({error:error.message})
}
}
module.exports={
    getAllReview,
    createReview
}