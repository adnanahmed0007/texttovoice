
import jwt from "jsonwebtoken";
const mysecretkey = "adnan123"


const GenratedTojken = async (user_id, res) => {
    const token = jwt.sign({ user_id }, mysecretkey, { expiresIn: "15d" });
    console.log(token)
    res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // only for https
        sameSite: "lax",
    });
    return token;


}
export default GenratedTojken