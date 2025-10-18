import jwt from "jsonwebtoken";
const mysecretkey = "adnan123"
const Verifyjtw = (req, res, next) => {
    const token = req.cookies.token || "";
    if (!token) {
        return res.status(401).json({ message: "Authentication token missing" });
    }
    jwt.verify(token, mysecretkey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        }
        req.user = decoded;
        next();
    });
};
export default Verifyjtw;
