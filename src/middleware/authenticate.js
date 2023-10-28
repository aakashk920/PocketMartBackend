const jwtprovider = require("../config/jwtProvider.js");
const userService = require("../services/user.service.js");

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Token not found or invalid" });
        }

        const token = authHeader.split(" ")[1];
        const userId = jwtprovider.getUserIdFromToken(token);
        const user = await userService.findUserById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = authenticate;
