const jwt = require("jsonwebtoken");
const SECRET_KEY = "sdsdgsdqwertyuiopasduiopzxcvbmdfghjklsdfghjkl";

const generateToken = (userId) => {
    try {
        const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
        return token;
    } catch (error) {
        throw new Error("Token generation error: " + error.message);
    }
};

const getUserIdFromToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, SECRET_KEY);
        return decodedToken.userId;
    } catch (error) {
        throw new Error("Token verification error: " + error.message);
    }
};

module.exports = { generateToken, getUserIdFromToken };
